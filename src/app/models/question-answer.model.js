const mongoose = require('mongoose');

const QuestionAnswerSchema = mongoose.Schema({

    empId: {
        type: Number,
        ref: 'Employee'
    },
    questionText: {
        type: String,
        minlength: 0,
        maxlength: 1000,
    },
    answerText: {
        type: String,
        minlength: 0,
        maxlength: 1000,
    },
    wellnessType: {
        type: String,
        enum: ['mental', 'physical', 'social', 'emotional'],
    },
    answerWeightage: {
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


module.exports = mongoose.model('QuestionAnswer', QuestionAnswerSchema);