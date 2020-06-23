const { Model, DataTypes } = require('sequelize');

class alert_history extends Model {
    static init(sequelize) {
        super.init({
            text: DataTypes.STRING,
            created_at: DataTypes.DATE
        }, {
            sequelize,
            freezeTableName: true,
            timestamps: false
        })
    };

    static associate(models) {
        this.belongsTo(models.Alert, { foreignKey: 'alert_id', as: 'history' });
    };
};

module.exports = alert_history;