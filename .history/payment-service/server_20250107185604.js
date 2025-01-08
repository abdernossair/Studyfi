require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./src/db');
const paymentRoutes = require('./src/routes/payment.routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

connectDB();

app.use('/payments', paymentRoutes);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Payment Service running on port ${PORT}`);
});
