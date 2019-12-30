const recommendationModel = require('../models/recommendation.model');
const response = require('../../utilities/reponse.utils');

exports.findAllRecommendation = async (req, res, next) => {
    try {
        const empId = req.body.empId;
        const wellnessType = req.body.wellnessType;
        const data = await recommendationModel.find({
            empId: empId,
            wellnessType: wellnessType
        });

        if (data.length > 0)
            response.GETSUCCESS(res, data);
        else
            throw Error('no record found');
    } catch (error) {
        next(error);
    }
}

exports.allRecommendations = async (req, res, next) => {
    try {
        const empId = req.params.id;
        const data = await recommendationModel.find(
            {
                empId: empId
            }
        );
        if (data.length > 0) {
            response.GETSUCCESS(res, data);
        } else {
            throw Error('no record found');
        }
    } catch (error) {
        next(error);
    }
}