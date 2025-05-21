const express = require('express');
const router = express.Router();
const { isAuthenticated } = require('../Middleware/authMiddleware');
const userController = require('../Controller/userController');


router.get('/user/dashboard', isAuthenticated, userController.getDashboard);


router.get('/user/foods',isAuthenticated, userController.getAllFoods);


module.exports = router;
