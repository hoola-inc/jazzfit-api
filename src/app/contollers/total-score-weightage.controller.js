const totalScoreWeightageSchema = require('../models/total-score-weightage.model');
const qaSchema = require('../models/question-answer.model');
const recommendationSchema = require('../models/recommendation.model');
const response = require('../../utilities/reponse.utils');
exports.total = async (req, res, next) => {
    try {
        const data = await totalScoreWeightageSchema.find({
            empId: req.params.id
        });

        if (data.length > 0)
            response.GETSUCCESS(res, data);
        else
            throw Error('no record found! ');

    } catch (error) {
        next(error);
    }
}

exports.totalEmpRecords = async (req, res, next) => {
    try {
        const id = req.params.id;
        const totalScore = await totalScoreWeightageSchema.find({ empId: id }).lean();
        const qa = await qaSchema.find({ empId: id }).lean();
        const recommendations = await recommendationSchema.find({ empId: id }).lean();
        const responseObj = {
            totalScore: totalScore,
            questionAnswers: qa,
            recommendations: recommendations
        }
        response.SUCCESS(res, responseObj);
    } catch (error) {
        console.log(error);
        next(error);
    }
}