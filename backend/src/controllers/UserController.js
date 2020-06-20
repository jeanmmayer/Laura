const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async store(req, res) {
        const { name, email, password, role } = req.body;
        const salt = bcrypt.genSaltSync();
        const passwordHash = bcrypt.hashSync(password, salt);

        const user = await User.create({
            name,
            email,
            password: passwordHash,
            role
        });

        return res.json(user);
    },

    async list(req, res) {
        const users = await User.findAll();

        return res.json(users);
    }
};