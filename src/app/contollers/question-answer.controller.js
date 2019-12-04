const QuestionAnswerSchema = require('../models/question-answer.model');

exports.createQuestionAnswer = async (req, res, next) => {
    try {
        const createNew = new QuestionAnswerSchema(req.body);
        const newAdded = await createNew.save();
        return res.status(200).json({
            status: true,
            data: newAdded
        })
    } catch (error) {
        next(error);
    }
}