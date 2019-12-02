module.exports = app => {
    const userController = require('../contollers/user.controller');

    app.post('/user', userController.createUser);
    app.get("/user", userController.getAllUser);
    app.get("/user/:id", userController.getUserById);
};