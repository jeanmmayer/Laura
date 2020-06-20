const router = require('express').Router();
const UserController = require('./controllers/UserController')
const auth = require('./config/auth');

// User
router.use(auth);
router.post('/users', UserController.store);
router.get('/users', UserController.list);

module.exports = router;