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
			alert_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'alerts', key: 'id'
				}
			},
			symptom_id: {
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
