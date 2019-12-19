const mongoose = require('mongoose');

const Recommendation = mongoose.Schema({

    empId: {
        type: Number,
        required: true
    },

    wellnessType: {
        type: String,
        enum: ['mental', 'physical', 'social', 'emotional']
    },

    question: {
        type: String
    },

    answer: {
        type: String
    },
    recommendationTitle: String,
    
    recommendation: [{
        title: String,
        detail: String
    }],
    totalAttempt: {
        type: Number,
        default: 0,
        min: 0,
        max: 2
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('Recommendation', Recommendation);