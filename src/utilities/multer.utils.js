const multer = require('multer');
const dirPath = require('path').join(__dirname, '../../public/img');
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, dirPath);
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }

});
const upload = multer({
    storage: storage
}, {
    limits: 1024 * 1024 * 5
});
const type = upload.single('empImage');

module.exports = type;