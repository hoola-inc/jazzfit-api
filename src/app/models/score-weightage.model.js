const mongoose = require('mongoose');

const ScoreWeightage = mongoose.Schema({

    empId: {
        type: Number,
        ref: 'Employee'
    },

    physicalScore: {
        type: Number,
        required: true
    },

    emotionalScore: {
        type: Number,
        required: true
    },

    mentalScore: {
        type: Number,
        required: true
    },

    socialScore: {
        type: Number,
        required: true
    },

    totalScore: {
        type: Number,
        required: true
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