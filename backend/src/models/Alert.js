const { Model, DataTypes } = require('sequelize');

class Alert extends Model {
    static init(sequelize) {
        super.init({
            is_pendent: DataTypes.BOOLEAN,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE
        }, {
            sequelize
        })
    };

    static associate(models) {
        this.hasMany(models.alert_history, { foreignKey: 'alert_id', as: 'history' });
        this.hasMany(models.alert_symptom, { foreignKey: 'alert_id', as: 'alert_symptom' });
        this.belongsTo(models.Patient, { foreignKey: 'patient_id', as: 'patient'});
    };
};

module.exports = Alert;