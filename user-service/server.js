require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./src/db');
const userRoutes = require('./src/routes/user.routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Connexion à MongoDB
connectDB();

// Routes
app.use('/users', userRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
