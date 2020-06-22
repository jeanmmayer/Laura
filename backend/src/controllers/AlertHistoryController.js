const AlertHistory = require('../models/AlertHistory');

module.exports = {
    async store(req, res) {
        const { id_alert, text } = req.body;

        const alert_history = await AlertHistory.create({
            id_alert,
            text,
            created_at: new Date()
        });

        return res.json(alert_history);
    },

    async list(req, res) {
        const { id_alert } = req.body;

        const history = await AlertHistory.findAll({
            attributes: ['id', 'id_alert', 'text', 'created_at'],
            where: {
                id_alert
            }
        });

        return res.json(history);
    }
};