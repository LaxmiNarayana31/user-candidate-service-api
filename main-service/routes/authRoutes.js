const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/protected', authMiddleware.verifyToken, authController.protected);

module.exports = router;
