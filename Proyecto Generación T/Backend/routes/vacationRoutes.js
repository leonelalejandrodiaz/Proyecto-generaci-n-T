const express = require('express');
const router = express.Router();
const vacationController = require('../controllers/vacationController');
const auth = require('../middleware/auth');

router.post('/add', auth, vacationController.addVacationRequest);
router.get('/', auth, vacationController.getVacationRequests);

module.exports = router;
