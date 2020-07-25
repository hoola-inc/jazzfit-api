module.exports = app => {
    const controller = require('../contollers/total-score-weightage.controller');
    const validateToken = require('../../utilities/jwt.utils').validateToken;
    app.get('/totalscore/:id', validateToken, controller.total);

    app.get('/totalemprecords/:id', controller.totalEmpRecords);
};