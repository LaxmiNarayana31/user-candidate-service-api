const express = require('express');
const candidateController = require('../controllers/candidateController');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();

router.post('/candidate', authMiddleware.verifyToken, candidateController.addCandidate);
router.get('/candidate', authMiddleware.verifyToken, candidateController.getCandidates);

module.exports = router;
