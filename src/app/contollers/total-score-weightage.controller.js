const totalScoreWeightageSchema = require('../models/total-score-weightage.model');

exports.total = async (req, res, next) => {
    try {
        const data = await totalScoreWeightageSchema.find({
            empId: req.params.id
        });

        if (data.length > 0) {
            return res.status(200).json({
                status: true,
                length: data.length,
                data: data
            })
        } else {
            return res.status(200).json({
                status: false,
                message: 'no record found'
            })
        }
    } catch (error) {
        next(error);
    }
}