const db = require('./user');

// Add a candidate to the database
const addCandidate = async (first_name, last_name, email, user_id) => {
  const [result] = await db.execute(
    'INSERT INTO candidates (first_name, last_name, email, user_id) VALUES (?, ?, ?, ?)',
    [first_name, last_name, email, user_id]
  );
  return result.insertId;
};

// Get candidates associated with a specific user ID
const getCandidatesByUserId = async (userId) => {
  const [rows] = await db.execute('SELECT * FROM candidates WHERE user_id = ?', [userId]);
  return rows;
};

module.exports = { addCandidate, getCandidatesByUserId };
