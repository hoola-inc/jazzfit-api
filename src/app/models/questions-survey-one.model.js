const mongoose = require('mongoose');

const SurveyOne = mongoose.Schema({

    question: String,
    answer: [{
        answerText: String,
        answerWeightage: Number
    }],
    welnessType: {
        type: String,
        enum: ['mental', 'physical', 'social', 'emotional']
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('SurveyOneQuestions', SurveyOne);

