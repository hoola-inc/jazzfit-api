const QuestionAnswerSchema = require('../models/question-answer.model');
const ScoreSchema = require('../models/score-weightage.model');

exports.createQuestionAnswer = (req, res, next) => {

    if (req.body instanceof Array) {
        let physicalScore = 0;
        let emotionalScore = 0;
        let socialScore = 0;
        let mentalScore = 0;
        let totalScore = 0;
        const empId = req.body[0].empId;
        const totalAttempt = req.body[0].totalAttempt;
        req.body.map(async (element, index) => {
            try {
                const createNew = new QuestionAnswerSchema(element);



                switch (element.wellnessType) {
                    case 'mental':
                        mentalScore = mentalScore + element.answerWeightage;
                        break;
                    case 'physical':
                        physicalScore = physicalScore + element.answerWeightage;
                        break;
                    case 'social':
                        socialScore = socialScore + element.answerWeightage;
                        break;
                    case 'emotional':
                        emotionalScore = emotionalScore + element.answerWeightage;
                        break;
                    default:
                        break;
                }


                await createNew.save();



                if (index === req.body.length - 1) {

                    totalScore = physicalScore + mentalScore + emotionalScore + socialScore;

                    const addScore = new ScoreSchema({
                        empId: empId,
                        physicalScore: physicalScore / 2,
                        emotionalScore: emotionalScore / 2,
                        mentalScore: mentalScore / 2,
                        socialScore: socialScore / 2,
                        totalScore: totalScore / 2,
                        totalAttempt: totalAttempt
                    });

                    await addScore.save();

                    return res.status(200).json({
                        status: true,
                        message: 'Saved Successfully'
                    });
                }
            } catch (error) {
                next(error);
            }
        });
    } else {
        return res.status(200).json({
            status: false,
            message: "Array not found!"
        });
    }
}



exports.getAllQuestionAnswer = async (req, res, next) => {
    try {
        const getAllQA = await QuestionAnswerSchema.find();
        if (getAllQA.length > 0) {
            return res.status(200).json({
                status: true,
                length: getAllQA.length,
                data: getAllQA
            })
        } else {
            return res.status(200).json({
                status: false,
                message: 'no record found!'
            })
        }
    } catch (error) {
        next(error);
    }
}

exports.scoreWeightage = async (req, res, next) => {
    try {
        const data = await QuestionAnswerSchema.find({
            wellnessType: req.body.wellnessType,
            empId: req.body.empId
        }).select('wellnessType empId answerWeightage');

        if (data.length > 0) {
            return res.status(200).json({
                status: true,
                length: data.length,
                data: data
            })
        } else {
            return res.status(200).json({
                status: true,
                message: 'no record found'
            })
        }
    } catch (error) {
        next(error);
    }
}

exports.scoreWeightageByEmpId = async (req, res, next) => {
    try {
        const data = await QuestionAnswerSchema.find({
            empId: req.params.id
        });

        if (data.length > 0) {
            return res.status(200).json({
                status: true,
                data: data
            })
        } else {
            return res.status(200).json({
                status: true,
                length: data.length,
                message: 'no record found'
            });
        }
    } catch (error) {
        next(error);
    }
}