'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('symptoms', [
			{
				name: 'Dor de cabeça',
				level: 5
			},
			{
				name: 'Coçeira no braço',
				level: 4
			},
			{
				name: 'Coçeira na perna',
				level: 5
			},
			{
				name: 'Tosse',
				level: 1
			},
			{
				name: 'Fraqueza nas pernas',
				level: 5
			},
			{
				name: 'Mãos suando',
				level: 3
			},
			{
				name: 'Dor na coluna',
				level: 2
			}
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('symptoms', null, {});
	}
};