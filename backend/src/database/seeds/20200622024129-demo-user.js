'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('users', [
			{
				name: 'Jean Michael Mayer',
				email: 'jean@outlook.com',
				password: '$2b$10$c0BnozmataJMsnhKsVVq0eggGWMS5LXxqFlms1evjFpTv3ou5.XKe',
				role: 'admin',
				created_at: new Date(),
				updated_at: new Date(),
			},
			{
				name: 'Convidado',
				email: 'user@example.com',
				password: '$2b$10$c0BnozmataJMsnhKsVVq0eggGWMS5LXxqFlms1evjFpTv3ou5.XKe',
				role: 'admin',
				created_at: new Date(),
				updated_at: new Date(),
			}
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('users', null, {});
	}
};