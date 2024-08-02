const candidateModel = require('../models/candidate');

exports.addCandidate = async (req, res) => {
  const { first_name, last_name, email } = req.body;
  const userId = req.user.id; 

  try {
    const candidateId = await candidateModel.addCandidate(first_name, last_name, email, userId);
    res.status(201).json({
      message: 'Candidate added successfully',
      candidate: {
        id: candidateId,
        first_name,
        last_name,
        email,
        user_id: userId
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error adding candidate', error: error.message });
  }
};

exports.getCandidates = async (req, res) => {
  const userId = req.user.id;

  try {
    const candidates = await candidateModel.getCandidatesByUserId(userId);
    res.status(200).json(candidates);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving candidates', error: error.message });
  }
};