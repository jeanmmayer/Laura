'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('alert_history', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false
			},
			id_alert: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'alerts', key: 'id'
				}
			},
			text: {
				type: Sequelize.TEXT,
				allowNull: false
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			}
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('alert_history');
	}
};
