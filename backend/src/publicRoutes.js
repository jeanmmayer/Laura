const router = require('express').Router();
const AuthController = require('./controllers/Auth');

router.post('/login', AuthController.login);
router.post('/validate-token', AuthController.validateToken);

module.exports = router;