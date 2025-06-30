// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/', productRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

