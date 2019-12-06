const QuestionAnswerSchema = require('../models/question-answer.model');

exports.createQuestionAnswer = async (req, res, next) => {
    try {
        if (req.body instanceof Array) {

            req.body.map(async (element) => {
                console.log(element);
                const createNew = new QuestionAnswerSchema(element);
                await createNew.save();
            });

            return res.status(200).json({
                status: true,
                message: 'Saved Successfully'
            });
        }

    } catch (error) {
        next(error);
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