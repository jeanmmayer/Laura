'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('alert_symptom', [
			{
				id: 1,
				id_alert: 1,
				id_symptom: 1
			},
			{
				id: 2,
				id_alert: 1,
				id_symptom: 2
			},
			{
				id: 3,
				id_alert: 1,
				id_symptom: 3
			},
			{
				id: 4,
				id_alert: 1,
				id_symptom: 4
			},
			{
				id: 5,
				id_alert: 1,
				id_symptom: 6
			},
			{
				id: 6,
				id_alert: 2,
				id_symptom: 5
			},
			{
				id: 7,
				id_alert: 2,
				id_symptom: 2
			},
			{
				id: 8,
				id_alert: 3,
				id_symptom: 1
			},
			{
				id: 9,
				id_alert: 3,
				id_symptom: 4
			},
			{
				id: 10,
				id_alert: 4,
				id_symptom: 5
			},
			{
				id: 11,
				id_alert: 5,
				id_symptom: 3
			},
			{
				id: 12,
				id_alert: 5,
				id_symptom: 1
			},
			{
				id: 13,
				id_alert: 6,
				id_symptom: 7
			},
			{
				id: 14,
				id_alert: 7,
				id_symptom: 6
			},
			{
				id: 15,
				id_alert: 7,
				id_symptom: 3
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('alert_symptom', null, {});
	}
};