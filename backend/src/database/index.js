const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User')
const Alert = require('../models/Alert')
const AlertHistory = require('../models/AlertHistory')
const AlertSymptom = require('../models/AlertSymptom')

const connection = new Sequelize(dbConfig);

User.init(connection);
Alert.init(connection);
AlertHistory.init(connection);
AlertSymptom.init(connection);

module.exports = connection;