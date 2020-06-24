const { Model, DataTypes } = require('sequelize');

class Symptom extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            level: DataTypes.INTEGER
        }, {
            sequelize,
            timestamps: false
        })
    };

    static associate(models) {
        this.hasMany(models.alert_symptom, { foreignKey: 'symptom_id', as: 'symptom' });
    };
};

module.exports = Symptom;