module.exports = app => {
    const empController = require('../contollers/employee.controller');

    app.post('/emp', empController.createUser);
    app.get("/emp", empController.getAllUser);
    app.get("/emp/:id", empController.getUserById);
};