const { Model, DataTypes } = require('sequelize');

class Patient extends Model {
    static init(sequelize) {
        super.init({
            med_record: DataTypes.STRING,
            name: DataTypes.STRING,
            birth_date: DataTypes.DATE,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
        }, {
            sequelize,
            timestamps: false
        })
    };

    static associate(models) {
        this.hasMany(models.Alert, { foreignKey: 'patient_id', as: 'patient' });
    };
};

module.exports = Patient;