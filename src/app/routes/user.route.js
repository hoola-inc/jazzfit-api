module.exports = app => {
    const userController = require('../contollers/user.constroller');

    app.post('/user', userController.createUser);

};