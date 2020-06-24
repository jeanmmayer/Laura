const Alert = require('../models/Alert');
const Sequelize = require('sequelize');

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
        const Op = Sequelize.Op;
        let where_patient = {};

        if(search_term) {
            where_patient = {
                [Op.or]: [
                    {
                        name: {
                            [Op.iLike]: `%${search_term}%`
                        }
                    }, {
                        med_record: {
                            [Op.iLike]: `%${search_term}%`
                        }
                    }
                ]
            }
        }

        let params = {
            include: [
                { association: 'history' },
                {
                    association: 'patient',
                    where: where_patient
                },
                {
                    association: 'alert_symptom',
                    include: {
                        association: 'symptom'
                    }
                }
            ]
        };

        const alerts = await Alert.findAll(params);

        return res.json(alerts);
    },
};