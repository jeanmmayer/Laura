const { Model, DataTypes } = require('sequelize');

class alert_symptom extends Model {
    static init(sequelize) {
        super.init({
            alert_id: DataTypes.INTEGER,
            symptom_id: DataTypes.INTEGER
        }, {
            sequelize,
            freezeTableName: true,
            timestamps: false
        })
    }
}

module.exports = alert_symptom;