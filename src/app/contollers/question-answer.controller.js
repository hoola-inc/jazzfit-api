const QuestionAnswerSchema = require('../models/question-answer.model');
const ScoreSchema = require('../models/total-score-weightage.model');
const wellnessTextConst = require('../../constants/main.constant');

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
                    totalScore = await totalScoreWeightage(totalScore, physicalScore, mentalScore, emotionalScore, socialScore, empId, totalAttempt);

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

async function totalScoreWeightage(totalScore, physicalScore, mentalScore, emotionalScore, socialScore, empId, totalAttempt) {
    let totalWellnessText = '';
    let physicalWellnessText = '';
    let emotionalWellnessText = '';
    let socialWellnessText = '';
    let mentalWellnessText = '';

    totalScore = physicalScore + mentalScore + emotionalScore + socialScore;

    totalScore = totalScore / 2;
    physicalScore = physicalScore / 2;
    emotionalScore = emotionalScore / 2;
    mentalScore = mentalScore / 2;
    socialScore = socialScore / 2;



    if (totalScore > 0 && totalScore <= 25)
        totalWellnessText = wellnessTextConst.totalWellness.Fourth;
    if (totalScore > 25 && totalScore <= 50)
        totalWellnessText = wellnessTextConst.totalWellness.Third;
    if (totalScore > 50 && totalScore <= 75)
        totalWellnessText = wellnessTextConst.totalWellness.Second;
    if (totalScore > 75 && totalScore <= 100)
        totalWellnessText = wellnessTextConst.totalWellness.First;

    if (physicalScore > 0 && physicalScore <= 25)
        physicalWellnessText = wellnessTextConst.physicalWelness.Fourth;
    if (physicalScore > 25 && physicalScore <= 50)
        physicalWellnessText = wellnessTextConst.physicalWelness.Third;
    if (physicalScore > 50 && physicalScore <= 75)
        physicalWellnessText = wellnessTextConst.physicalWelness.Second;
    if (physicalScore > 75 && physicalScore <= 100)
        physicalWellnessText = wellnessTextConst.physicalWelness.First;

    if (emotionalScore > 0 && emotionalScore <= 25)
        emotionalWellnessText = wellnessTextConst.emotionalWelness.Fourth;
    if (emotionalScore > 25 && emotionalScore <= 50)
        emotionalWellnessText = wellnessTextConst.emotionalWelness.Third;
    if (emotionalScore > 50 && emotionalScore <= 75)
        emotionalWellnessText = wellnessTextConst.emotionalWelness.Second;
    if (emotionalScore > 75 && emotionalScore <= 100)
        emotionalWellnessText = wellnessTextConst.emotionalWelness.First;

    if (socialScore > 0 && socialScore <= 25)
        socialWellnessText = wellnessTextConst.socialWelness.Fourth;
    if (socialScore > 25 && socialScore <= 50)
        socialWellnessText = wellnessTextConst.socialWelness.Third;
    if (socialScore > 50 && socialScore <= 75)
        socialWellnessText = wellnessTextConst.socialWelness.Second;
    if (socialScore > 75 && socialScore <= 100)
        socialWellnessText = wellnessTextConst.socialWelness.First;

    if (mentalScore > 0 && mentalScore <= 25)
        mentalWellnessText = wellnessTextConst.mentalWelness.Fourth;
    if (mentalScore > 25 && mentalScore <= 50)
        mentalWellnessText = wellnessTextConst.mentalWelness.Third;
    if (mentalScore > 50 && mentalScore <= 75)
        mentalWellnessText = wellnessTextConst.mentalWelness.Second;
    if (mentalScore > 75 && mentalScore <= 100)
        mentalWellnessText = wellnessTextConst.mentalWelness.First;




    const addScore = new ScoreSchema({
        empId: empId,
        physicalScore: physicalScore,
        emotionalScore: emotionalScore,
        mentalScore: mentalScore,
        socialScore: socialScore,
        totalScore: totalScore,
        totalAttempt: totalAttempt,
        totalWellnessText: totalWellnessText,
        mentalWellnessText: mentalWellnessText,
        emotionalWellnessText: emotionalWellnessText,
        physicalWellnessText: physicalWellnessText,
        socialWellnessText: socialWellnessText
    });
    console.log('saving total-score-weightage...');
    await addScore.save();
    console.log('done');
    return totalScore;
}
