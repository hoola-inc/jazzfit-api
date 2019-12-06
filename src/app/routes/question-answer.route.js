module.exports = app => {
    const qaController = require('../contollers/question-answer.controller');
    const validateToken = require('../../utilities/jwt.utils').validateToken;
    app.post('/qa', validateToken, qaController.createQuestionAnswer);
    app.get('/qa', validateToken, qaController.getAllQuestionAnswer);
};