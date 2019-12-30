module.exports = app => {
    const recommendationController = require('../contollers/recommendation.controller');
    const validateToken = require('../../utilities/jwt.utils').validateToken;
    app.post('/recommendations', validateToken, recommendationController.findAllRecommendation);
    app.get('/recommendations/:id', validateToken, recommendationController.allRecommendations);
};