const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// User registration route
router.post('/register', authController.registerUser);

// OTP verification route
router.post('/verify', authController.verifyUserOTP);

module.exports = router;
