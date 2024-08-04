const express = require('express');
const dotenv = require('dotenv');
const publicRoutes = require('./routes/publicRoutes');

dotenv.config();
const app = express();
app.use(express.json());

app.use('/api', publicRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Public API running on port ${PORT}`));
