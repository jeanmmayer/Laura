'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('patients', [
			{
				med_record: '048',
				name: 'John Doe',
				birth_date: new Date("2015/10/10")
			},
			{
				med_record: '543',
				name: 'Jane Doe',
				birth_date: new Date("1999/11/12")
			},
			{
				med_record: '12',
				name: 'Mike Silva',
				birth_date: new Date("2000/11/01")
			},
			{
				med_record: '32',
				name: 'Gabriel Ferreira',
				birth_date: new Date("1984/03/05")
			},
			{
				med_record: '852',
				name: 'Lucas Silveira',
				birth_date: new Date("1980/03/08")
			},
			{
				med_record: '694',
				name: 'Joana Heinze',
				birth_date: new Date("1940/01/01")
			},
		]);
	},
	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('patients', null, {});
	}
};