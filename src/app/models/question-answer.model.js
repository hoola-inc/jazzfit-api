const mongoose = require('mongoose');

const QuestionAnswerSchema = mongoose.Schema({

    empId: {
        type: Number
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
        enum: ['mental', 'physical', 'social', 'emotional']
    },
    answerWeightage: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value'
        }
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