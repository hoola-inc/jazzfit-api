module.exports = app => {
    const controller = require('../contollers/survey-one.controller');
    const validateToken = require('../../utilities/jwt.utils').validateToken;
    // app.post('/surveyone', controller.questions);
    app.get('/questions', validateToken, controller.getAllQuestions);
};


