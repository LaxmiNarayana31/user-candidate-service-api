// routes/profileRoutes.js
const express = require('express');
const profileController = require('../controllers/profileController');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();

router.post('/profile', authMiddleware.verifyToken, profileController.getProfile);

module.exports = router;
