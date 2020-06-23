const jwt = require('jsonwebtoken');
const env = require('../../src/.env');

module.exports = (req, res, next) => {
    if(req.method === 'OPTIONS') {
        next();
    } else {
        const token = req.body.token || req.query.token || req.headers['authorization'] || req.headers['token'];

        if(!token) {
            return res.status(403).send({ errors: ['No token provided']})
        }

        jwt.verify(token, env.authSecret, function (err, decoded) {
            if(err) {
                return res.status(403).send({
                    errors: ['Authentication failed']
                })
            } else {
                next();
            }
        })
    }
}