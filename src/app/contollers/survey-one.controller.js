const SurveyOne = require('../models/questions-survey-one.model');

exports.questions = async (req, res, next) => {

    try {
        const createQuestion = new SurveyOne(req.body);
        await createQuestion.save();

        return res.status(200).json({
            status: true,
            data: createQuestion
        });
    } catch (error) {
        next(error);
    }

}

exports.getAllQuestions = async (req, res, next) => {
    const data = await SurveyOne.find();
    console.log(req.ip);
    return res.status(200).json({
        status: true,
        length: data.length,
        data: data
    })
}