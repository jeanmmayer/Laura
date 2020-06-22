'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('symptoms', {
			id: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false
			},
			level: {
				type: Sequelize.INTEGER,
				allowNull: false,
				comment: "1) Fraco, 2 e 3) Leve e médio, 4 e 5) Moderado e intenso"
			}
		});
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('symptoms');
	}
};
