module.exports = app => {
    const recommendationController = require('../contollers/recommendation.controller');
    const validateToken = require('../../utilities/jwt.utils').validateToken;
    app.get('/recommendations/:id', validateToken, recommendationController.findAllRecommendation);
};