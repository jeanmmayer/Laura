const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User')
const Patient = require('../models/Patient')
const Alert = require('../models/Alert')
const AlertHistory = require('../models/AlertHistory')
const AlertSymptom = require('../models/AlertSymptom')

const connection = new Sequelize(dbConfig);

User.init(connection);
Patient.init(connection);
Alert.init(connection);
AlertHistory.init(connection);
AlertSymptom.init(connection);

Patient.associate(connection.models);
Alert.associate(connection.models);
AlertHistory.associate(connection.models);

module.exports = connection;