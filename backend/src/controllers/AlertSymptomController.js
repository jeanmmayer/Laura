const AlertSymptom = require('../models/AlertSymptom');

module.exports = {
    async list(req, res) {
        const { alert_id } = req.body;

        const alert_symptoms = await AlertSymptom.findAll({
            attributes: ['alert_id', 'symptom_id'],
            where: {
                alert_id
            }
        });

        return res.json(alert_symptoms);
    }
};