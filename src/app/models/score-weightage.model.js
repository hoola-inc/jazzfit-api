const mongoose = require('mongoose');

const ScoreWeightage = mongoose.Schema({

    empId: {
        type: Number,
        ref: 'Employee'
    },
    wellnessType: {
        type: String,
        enum: ['mental', 'physical', 'social', 'emotional'],
    },
    totalScore: {
        type: Number
    },
    totalAttempt: {
        type: Number,
        min: 0,
        max: 2,
        required: true
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('ScoreWeightage', ScoreWeightage);