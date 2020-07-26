module.exports = app => {
    const empController = require('../contollers/employee.controller');
    const validateToken = require('../../utilities/jwt.utils').validateToken;
    const type = require('../../utilities/multer.utils');
    app.post('/emp', empController.createUser);
    app.get('/emp', validateToken, empController.getAllUser);
    app.get('/emp/:id', validateToken, empController.getUserById);
    app.get('/emp/totalattempts/:id', validateToken, empController.getEmpTotalAttempt);
    app.patch('/emp/totalattempts/:id', validateToken, empController.updateEmpTotalAttempt);
    app.patch('/emp/weight/:id', type, validateToken, empController.updateEmpWeight);
    app.get('/refreshtoken/:id', empController.refreshToken);
    app.get('/checkemp/:id', empController.checkUser);
    app.put('/emp/body/:id', empController.updateBody);

    app.get('/employees', empController.getAllEmployees);
};

