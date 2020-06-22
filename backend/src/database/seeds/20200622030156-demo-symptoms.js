'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('symptoms', [
			{
				id: 1,
				name: 'Dor de cabeça',
				level: 5
			},
			{
				id: 2,
				name: 'Coçeira no braço',
				level: 4
			},
			{
				id: 3,
				name: 'Coçeira na perna',
				level: 5
			},
			{
				id: 4,
				name: 'Tosse',
				level: 1
			},
			{
				id: 5,
				name: 'Fraqueza nas pernas',
				level: 5
			},
			{
				id: 6,
				name: 'Mãos suando',
				level: 3
			},
			{
				id: 7,
				name: 'Dor na coluna',
				level: 2
			}
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('symptoms', null, {});
	}
};