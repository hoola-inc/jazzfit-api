const mongoose = require('mongoose');

const ScoreWeightage = mongoose.Schema({

    empId: {
        type: Number,
        required: true
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

    totalWellnessText: {
        type: String,
        required: true
    },

    mentalWellnessText: {
        type: String,
        required: true
    },

    socialWellnessText: {
        type: String,
        required: true
    },

    emotionalWellnessText: {
        type: String,
        required: true
    },

    physicalWellnessText: {
        type: String,
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