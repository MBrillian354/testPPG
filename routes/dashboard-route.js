const express = require('express');

const dashboardController = require('../controllers/dashboard-controller')

const router = express.Router();

// router.post('/signup', usersController.signup);

// router.delete('/:userId', usersController.deleteUser);

router.get('/', dashboardController.getDashboardData)


module.exports = router; 