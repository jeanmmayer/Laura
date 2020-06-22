'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('alerts', [
			{
				id_patient: 1,
				is_pendent: false,
				created_at: new Date("2020/06/20 05:45:10"),
				updated_at: new Date(),
			},
			{
				id_patient: 2,
				is_pendent: true,
				created_at: new Date("2020/06/21 11:00:15"),
				updated_at: new Date(),
			},
			{
				id_patient: 2,
				is_pendent: false,
				created_at: new Date("2020/05/20 16:01:00"),
				updated_at: new Date(),
			},
			{
				id_patient: 3,
				is_pendent: true,
				created_at: new Date("2020/06/18 15:39:45"),
				updated_at: new Date(),
			},
			{
				id_patient: 5,
				is_pendent: false,
				created_at: new Date("2020/06/10 01:05:05"),
				updated_at: new Date(),
			},
			{
				id_patient: 6,
				is_pendent: true,
				created_at: new Date("2020/06/05 19:45:10"),
				updated_at: new Date(),
			},
			{
				id_patient: 4,
				is_pendent: false,
				created_at: new Date("2020/06/05 10:56:41"),
				updated_at: new Date(),
			}
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('alerts', null, {});
	}
};