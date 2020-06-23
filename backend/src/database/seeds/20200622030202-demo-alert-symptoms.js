'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('alert_symptom', [
			{
				alert_id: 1,
				symptom_id: 1
			},
			{
				alert_id: 1,
				symptom_id: 2
			},
			{
				alert_id: 1,
				symptom_id: 3
			},
			{
				alert_id: 1,
				symptom_id: 4
			},
			{
				alert_id: 1,
				symptom_id: 6
			},
			{
				alert_id: 2,
				symptom_id: 5
			},
			{
				alert_id: 2,
				symptom_id: 2
			},
			{
				alert_id: 3,
				symptom_id: 1
			},
			{
				alert_id: 3,
				symptom_id: 4
			},
			{
				alert_id: 4,
				symptom_id: 5
			},
			{
				alert_id: 5,
				symptom_id: 3
			},
			{
				alert_id: 5,
				symptom_id: 1
			},
			{
				alert_id: 6,
				symptom_id: 7
			},
			{
				alert_id: 7,
				symptom_id: 6
			},
			{
				alert_id: 7,
				symptom_id: 3
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('alert_symptom', null, {});
	}
};