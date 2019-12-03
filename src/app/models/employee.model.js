const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({

    empName: String,
    empId: String,
    department: String,
    height: String,
    weight: String,
    email: {
        type: String,
        lowercase: true,
        trim: true,
        unique: true
    },
    dateOfBirth: String,
    gender: String

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