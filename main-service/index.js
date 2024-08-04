const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const candidateRoutes = require('./routes/candidateRoutes');

const profileRoutes = require('./routes/profileRoutes'); 

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', candidateRoutes);
app.use('/api', profileRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Main service running on port ${PORT}`));
