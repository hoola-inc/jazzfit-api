const totalScoreWeightageSchema = require('../models/total-score-weightage.model');
const recommendationSchema = require('../models/recommendation.model');
const empSchema = require('../models/employee.model');
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
        const recommendations = await recommendationSchema.find({ empId: id }).lean();
        const empRecords = await empSchema.find({ empId: id }).lean();
        const responseObj = {
            employee: empRecords,
            totalScore: totalScore,
            recommendations: recommendations
        }
        response.SUCCESS(res, responseObj);
    } catch (error) {
        console.log(error);
        next(error);
    }
}