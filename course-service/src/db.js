const mongoose = require('mongoose');

async function connectDB() {
  try {
    const uri = process.env.MONGO_URI || 'mongodb://mongo:27017/coursedb';
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Course Service: Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
}

module.exports = connectDB;
