module.exports = app => {
    const empController = require('../contollers/employee.controller');
    const validateToken = require('../../utilities/jwt.utils').validateToken;
    app.post("/emp", empController.createUser);
    app.get("/emp", validateToken, empController.getAllUser);
    app.get("/emp/:id", validateToken, empController.getUserById);
    app.get("/emp/totalattempts/:id", validateToken, empController.getEmpTotalAttempt);
    app.patch('/emp/totalattempts/:id', validateToken, empController.updateEmpTotalAttempt);

    app.get('/refreshtoken', empController.refreshToken);
};