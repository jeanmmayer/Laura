const router = require('express').Router();
const UserController = require('./controllers/UserController');
const AlertController = require('./controllers/AlertController');
const AlertHistoryController = require('./controllers/AlertHistoryController');
const AlertSymptomController = require('./controllers/AlertSymptomController');
const auth = require('./config/auth');

// Validation
router.use(auth);

// User
router.post('/users', UserController.store);
router.get('/users', UserController.list);

// Alert
router.post('/alerts', AlertController.store);
router.get('/alerts', AlertController.list);

// AlertHistory
router.post('/alert/history', AlertHistoryController.store);
router.get('/alert/history', AlertHistoryController.list);

// Symptoms
router.get('/alert/symptoms', AlertSymptomController.list);

module.exports = router;