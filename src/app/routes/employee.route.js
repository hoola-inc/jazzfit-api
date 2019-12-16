module.exports = app => {
    const empController = require('../contollers/employee.controller');
    const validateToken = require('../../utilities/jwt.utils').validateToken;
    const type = require('../../utilities/multer.utils');
    app.post('/emp', type, empController.createUser);
    app.get('/emp', validateToken, empController.getAllUser);
    app.get('/emp/:id', validateToken, empController.getUserById);
    app.get('/emp/totalattempts/:id', validateToken, empController.getEmpTotalAttempt);
    app.patch('/emp/totalattempts/:id', validateToken, empController.updateEmpTotalAttempt);
    app.patch('/emp/weight/:id', validateToken, empController.updateEmpWeight);
    app.get('/refreshtoken', empController.refreshToken);
    app.get('/checkemp/:id', empController.checkUser);
};


