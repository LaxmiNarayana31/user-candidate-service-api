const axios = require('axios');
const config = require('../config/config');

const MAIN_SERVICE_URL = 'http://localhost:5000/api'; // URL of the main service

exports.getProfile = async (req, res) => {
  try {
    const apiKey = req.query['x-api-key']; // Use query parameter for API key

    if (apiKey !== config.API_KEY) {
      return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }

    const response = await axios.post(`${MAIN_SERVICE_URL}/profile`, {}, {
      headers: { 'x-api-key': apiKey }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving profile from main service' });
  }
};

exports.getCandidates = async (req, res) => {
  try {
    const apiKey = req.query['x-api-key']; // Use query parameter for API key

    if (apiKey !== config.API_KEY) {
      return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }

    const response = await axios.get(`${MAIN_SERVICE_URL}/candidate`, {
      headers: { 'x-api-key': apiKey }
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving candidates from main service' });
  }
};
