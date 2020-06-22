const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(sequelize) {
        super.init({
            id_alert: DataTypes.INTEGER,
            text: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = AlertHistory;