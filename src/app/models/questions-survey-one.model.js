const mongoose = require('mongoose');

const SurveyOne = mongoose.Schema({

    question: String,
    answer: [String],
    welnessType: {
        type: String,
        enum: ['mental', 'physical', 'social', 'emotional']
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('SurveyOneQuestions', SurveyOne);

