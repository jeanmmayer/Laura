const AlertSymptom = require('../models/AlertSymptom');

module.exports = {
    async list(req, res) {
        const { id_alert } = req.body;

        const alert_symptoms = await AlertSymptom.findAll({
            attributes: ['id_alert', 'id_symptom'],
            where: {
                id_alert
            }
        });

        return res.json(alert_symptoms);
    }
};