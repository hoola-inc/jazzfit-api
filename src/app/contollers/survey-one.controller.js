const SurveyOne = require('../models/questions-survey-one.model');
const response = require('../../utilities/reponse.utils');

exports.questions = async (req, res, next) => {

    try {
        const createQuestion = new SurveyOne(req.body);
        await createQuestion.save();
        response.SUCCESS(res, createQuestion);
    } catch (error) {
        next(error);
    }

}

exports.getAllQuestions = async (req, res, next) => {
    const data = await SurveyOne.find();
    response.GETSUCCESS(res, data);
}