const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  const user = process.env.DB_USER;
  const pass = process.env.DB_PASS;
  const myDB = 'myProducts';

  const uri = `mongodb+srv://${user}:${pass}@project.hwbxf7p.mongodb.net/${myDB}?retryWrites=true&w=majority&appName=Project`;

  try {
    await mongoose.connect(uri);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
