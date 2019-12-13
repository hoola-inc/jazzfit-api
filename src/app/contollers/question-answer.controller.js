const QuestionAnswerSchema = require('../models/question-answer.model');

exports.createQuestionAnswer = (req, res, next) => {
    if (req.body instanceof Array) {

        req.body.map(async (element, index) => {
            try {
                console.log(element);
                const createNew = new QuestionAnswerSchema(element);
                await createNew.save();
                console.log(index, req.body.length);
                if (index === req.body.length - 1) {
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
            message: "Array not found"
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