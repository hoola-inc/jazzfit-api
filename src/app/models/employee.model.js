const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({

    empName: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    empId: {
        type: Number,
        lowercase: true,
        trim: true,
        required: true,
        unique: true
    },
    department: {
        type: String,
        lowercase: true,
        trim: true,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true,
        required: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    totalAttempt: {
        type: Number,
        default: 0,
        min: 0,
        max: 2
    },
    empImage: {
        type: String,
        default: ''
    }

}, {
    timestamps: true
});



EmployeeSchema.pre("save", function (next) {
    const self = this;

    mongoose.models["Employee"].findOne({ empId: this.empId }, function (err, results) {
        if (err) {
            next(err);
        } else if (results) {
            console.log('employee id must be unique');
            self.invalidate("empId", "employee id must be unique");
            next(new Error("employee id must be unique"));
        } else {
            next();
        }
    });
});

module.exports = mongoose.model('Employee', EmployeeSchema);