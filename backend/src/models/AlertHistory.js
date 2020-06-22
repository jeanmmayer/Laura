const { Model, DataTypes } = require('sequelize');

class alert_history extends Model {
    static init(sequelize) {
        super.init({
            id_alert: DataTypes.INTEGER,
            text: DataTypes.STRING,
            created_at: DataTypes.DATE
        }, {
            sequelize,
            freezeTableName: true,
            timestamps: false
        })
    }
}

module.exports = alert_history;