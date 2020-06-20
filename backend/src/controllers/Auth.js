const _ = require('lodash');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const env = require('../../src/.env');

const sendErrorsFromDB = (res, dbErrors) => {
    const errors = [];
    _.forIn(dbErrors, error => errors.push(error.message));
    return res.status(400).json({errors});
}

module.exports = {
    async login(req, res, next) {
        const email = req.body.email || '';
        const password = req.body.password || '';

        const user = await User.findOne({
            where: {
                email: email
            }
        });

        console.log(user);

        // User.findOne({ email }, (err, user) => {
        //     if(err) {
        //         return sendErrorsFromDB(res, err);
        //     } else if (user && bcrypt.compareSync(password, user.password)) {
        //         const token = jwt.sign(user, env.authSecret, {
        //             expiresIn: "1 day"
        //         });
        //         const { name, email } = user;
        //         res.json({ name, email, token })
        //     } else {
        //         return res.status(400).send({ errors: ['Usuário ou senha inválidos']});
        //     }
        // });
    },
    async validateToken(req, res, next) {
        const token = req.body.token || '';

        jwt.verify(token, env.authSecret, function (err, decoded) {
            return res.status(200).send({valid: !err});
        });
    }
}

