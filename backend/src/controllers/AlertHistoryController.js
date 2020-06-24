const AlertHistory = require('../models/AlertHistory');
const Alert = require('../models/Alert');

module.exports = {
    async store(req, res) {
        const { alert_id, text } = req.body;

        const alert_history = await AlertHistory.create({
            alert_id,
            text,
            created_at: new Date()
        });

        await Alert.update({ is_pendent: false }, {
            where: {
                id: alert_id
            }
        });

        return res.json(alert_history);
    },

    async list(req, res) {
        const { alert_id } = req.body;

        const history = await AlertHistory.findAll({
            attributes: ['id', 'alert_id', 'text', 'created_at'],
            where: {
                alert_id
            }
        });

        return res.json(history);
    }
};