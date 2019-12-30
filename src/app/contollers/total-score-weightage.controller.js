const totalScoreWeightageSchema = require('../models/total-score-weightage.model');
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