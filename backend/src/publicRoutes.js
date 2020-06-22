const router = require('express').Router();
const AuthController = require('./controllers/AuthController');

router.post('/login', AuthController.login);
router.post('/validate-token', AuthController.validateToken);

module.exports = router;