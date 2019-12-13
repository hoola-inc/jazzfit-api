const mongoose = require('mongoose');

const QuestionAnswerSchema = mongoose.Schema({

    empId: {
        type: Number,
        ref: 'Employee'
    },
    questionText: {
        type: String,
        minlength: 10,
        maxlength: 1000,
    },
    answerText: {
        type: String,
        minlength: 10,
        maxlength: 1000,
    },
    wellnessType: {
        type: String,
        enum: ['mental', 'physical', 'social', 'emotional'],
    },
    answerWeightage: {
        type: Number
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('QuestionAnswer', QuestionAnswerSchema);