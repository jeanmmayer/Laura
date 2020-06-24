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
    };

    static associate(models) {
        this.belongsTo(models.Alert, { foreignKey: 'alert_id', as: 'alert_symptom' });
        this.belongsTo(models.Symptom, { foreignKey: 'symptom_id', as: 'symptom' });
    };
}

module.exports = alert_symptom;