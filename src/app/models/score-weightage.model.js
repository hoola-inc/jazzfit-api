const mongoose = require('mongoose');

const ScoreWeightage = mongoose.Schema({

    empId: {
        type: Number
    },

    physicalScore: {
        type: Number,
        default: 0,
        required: true
    },

    emotionalScore: {
        type: Number,
        default: 0,
        required: true
    },

    mentalScore: {
        type: Number,
        default: 0,
        required: true
    },

    socialScore: {
        type: Number,
        default: 0,
        required: true
    },

    totalScore: {
        type: Number,
        default: 0,
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