const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({

    name: String,
    userId: String,
    department: String,
    height: String,
    weight: String,
    email: {
        type: String,
        lowercase: true, 
        trim: true,
        unique: true
    },
    dateOfBirth: String
    
}, {
    timestamps: true
});



StudentSchema.pre("save", function (next) {
    const self = this;

    mongoose.models["Student"].findOne({ userId: this.userId }, function (err, results) {
        if (err) {
            next(err);
        } else if (results) {
            console.log('user id must be unique');
            self.invalidate("userID", "did must be unique");
            next(new Error("user id must be unique"));
        } else {
            next();
        }
    });
});

module.exports = mongoose.model('Student', StudentSchema);