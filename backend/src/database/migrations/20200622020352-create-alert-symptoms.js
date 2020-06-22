'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('alert_symptom', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			id_alert: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'alerts', key: 'id'
				}
			},
			id_symptom: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'symptoms', key: 'id'
				}
			}
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('alert_symptom');
	}
};
