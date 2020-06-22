'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('alert_symptom', [
			{
				id_alert: 1,
				id_symptom: 1
			},
			{
				id_alert: 1,
				id_symptom: 2
			},
			{
				id_alert: 1,
				id_symptom: 3
			},
			{
				id_alert: 1,
				id_symptom: 4
			},
			{
				id_alert: 1,
				id_symptom: 6
			},
			{
				id_alert: 2,
				id_symptom: 5
			},
			{
				id_alert: 2,
				id_symptom: 2
			},
			{
				id_alert: 3,
				id_symptom: 1
			},
			{
				id_alert: 3,
				id_symptom: 4
			},
			{
				id_alert: 4,
				id_symptom: 5
			},
			{
				id_alert: 5,
				id_symptom: 3
			},
			{
				id_alert: 5,
				id_symptom: 1
			},
			{
				id_alert: 6,
				id_symptom: 7
			},
			{
				id_alert: 7,
				id_symptom: 6
			},
			{
				id_alert: 7,
				id_symptom: 3
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('alert_symptom', null, {});
	}
};