const Alert = require('../models/Alert');

module.exports = {
    // Not using store function
    async store(req, res) {
        const { patient_id, is_pendent } = req.body;

        const alert = await Alert.create({
            patient_id,
            is_pendent
        });

        return res.json(alert);
    },

    async list(req, res) {
        const search_term = req.body.search || '';
        let params = {
            include: {
                association: 'patient'
            }
        };

        const alerts = await Alert.findAll(params);

        return res.json(alerts);
    },
};