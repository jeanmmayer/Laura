'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('alerts', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			id_patient: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'patients', key: 'id'
				}
			},
			is_pendent: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				default: true
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: false
			},
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('alerts');
	}
};
