const express = require('express');
const UserController = require('./controllers/UserController')
const auth = require('./config/auth');
const AuthController = require('./controllers/Auth');

module.exports = function(server) {
    const protectedApi = express.Router();
    server.use('/api', protectedApi);
    protectedApi.use(auth);

    // User
    protectedApi.post('/users', UserController.store);
    protectedApi.get('/users', UserController.list);

    const openApi = express.Router();
    server.use('/oapi', openApi);

    openApi.post('/login', AuthController.login);
}