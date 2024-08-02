const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/user');
const config = require('../config/config');

exports.register = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const [result] = await db.execute(
      'INSERT INTO users (first_name, last_name, email, password_hash) VALUES (?, ?, ?, ?)',
      [first_name, last_name, email, hashedPassword]
    );

 
    res.status(201).json({
      message: 'User registered successfully',
      user: {
        id: result.insertId,
        first_name,
        last_name,
        email
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    const user = rows[0];

    // Check if user exists and password matches
    if (!user || !await bcrypt.compare(password, user.password_hash)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, config.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.protected = (req, res) => {
  res.json({ message: 'Protected route accessed' });
};
