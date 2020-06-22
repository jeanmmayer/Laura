'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('alert_history', [
			{
				id_alert: 1,
				text: 'Falei com o paciente e orientei a tomar tal medicação.',
				created_at: new Date("2020/06/20 05:50:00")
			},
			{
				id_alert: 1,
				text: 'Melhorou após tomar água.',
				created_at: new Date("2020/06/20 08:12:00")
			},
			{
				id_alert: 3,
				text: 'Feito contato com o paciente, passou.',
				created_at: new Date("2020/05/20 17:19:00")
			},
			{
				id_alert: 5,
				text: 'Fiz contato e orientei a nos procurar caso a dor aumentasse.',
				created_at: new Date("2020/06/10 01:10:11")
			},
			{
				id_alert: 5,
				text: 'Sintomas pioraram, pedi para vir ao hospital.',
				created_at: new Date("2020/06/10 05:15:54")
			},
			{
				id_alert: 5,
				text: 'Melhorou rapidamente após medicação.',
				created_at: new Date("2020/06/10 13:01:24")
			}
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('alert_history', null, {});
	}
};