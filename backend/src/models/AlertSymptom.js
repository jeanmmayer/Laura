const { Model, DataTypes } = require('sequelize');

class alert_symptom extends Model {
    static init(sequelize) {
        super.init({
            id_alert: DataTypes.INTEGER,
            id_symptom: DataTypes.INTEGER
        }, {
            sequelize,
            freezeTableName: true,
            timestamps: false
        })
    }
}

module.exports = alert_symptom;