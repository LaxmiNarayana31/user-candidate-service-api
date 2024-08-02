const db = require('../models/user');

exports.getProfile = async (req, res) => {
  try {
    const apiKey = req.headers['x-api-key'];

    if (apiKey !== process.env.API_KEY) {
      return res.status(403).json({ message: 'Forbidden: Invalid API Key' });
    }

    const userId = req.user.id;
    const [rows] = await db.execute('SELECT id, first_name, last_name, email FROM users WHERE id = ?', [userId]);
    const user = rows[0];

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving profile' });
  }
};
