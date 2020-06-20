const server = require('./server');
require('./config/database');
require('./routes')(server);