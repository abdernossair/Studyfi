require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./src/db');
const courseRoutes = require('./src/routes/course.routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

connectDB();

app.use('/courses', courseRoutes);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Course Service running on port ${PORT}`);
});
