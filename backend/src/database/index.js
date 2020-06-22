const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User')
const Alert = require('../models/Alert')
const AlertHistory = require('../models/AlertHistory')

const connection = new Sequelize(dbConfig);

User.init(connection);
Alert.init(connection);
AlertHistory.init(connection);

module.exports = connection;