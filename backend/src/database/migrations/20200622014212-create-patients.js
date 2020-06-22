'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('patients', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			med_record: {
				type: Sequelize.STRING,
				allowNull: false,
				comment: "Prontuário"
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			birth_date: {
				type: Sequelize.DATE,
				allowNull: false
			},
			email: {
				type: Sequelize.STRING,
				allowNull: true
			},
			password: {
				type: Sequelize.STRING,
				allowNull: true
			}
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('patients');
	}
};
