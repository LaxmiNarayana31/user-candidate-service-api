const config = require('../config/config');

exports.verifyApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey !== config.API_KEY) {
    return res.status(403).json({ message: 'Invalid API key' });
  }

  next();
};
