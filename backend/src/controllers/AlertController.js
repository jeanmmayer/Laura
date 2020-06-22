const Alert = require('../models/Alert');

module.exports = {
    // Not using store function
    async store(req, res) {
        const { id_patient, is_pendent } = req.body;

        const alert = await Alert.create({
            id_patient,
            is_pendent
        });

        return res.json(alert);
    },

    async list(req, res) {
        const search_term = req.body.search || '';
        let params = {};

        // if (search_term) {
        //     params = {
        //         where: {

        //         }
        //     }
        // } else {

        // }

        const alerts = await Alert.findAll(params);

        return res.json(alerts);
    },
};