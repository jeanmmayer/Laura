const { Model, DataTypes } = require('sequelize');

class Alert extends Model {
    static init(sequelize) {
        super.init({
            id_patient: DataTypes.INTEGER,
            is_pendent: DataTypes.BOOLEAN,
            created_at: DataTypes.DATE,
            updated_at: DataTypes.DATE
        }, {
            sequelize
        })
    }
}

module.exports = Alert;