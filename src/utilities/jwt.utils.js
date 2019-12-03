const jwt = require('jsonwebtoken');

module.exports = {
    validateToken: (req, res, next) => {
        // getting token 
        let token = req.body.token ||
            req.query.token ||
            req.headers['x-access-token'];
        if (!token) {
            try {
                token = req.headers.authorization.split(' ')[1];
            } catch (e) {
                throw Error('token not found in any given params');
            }
        }


        jwt.verify(token, process.env.JWT_SECRET, (err, authData) => {
            if (err) {
                next(err);
            } else {
                console.log('executing next...');
                next();
            }
        });
    }
};