const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contact');

// Load environment variables based on NODE_ENV
const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development';
dotenv.config({ path: path.resolve(__dirname, envFile) });

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT} [${process.env.NODE_ENV}]`)
);

app.get('/', (req, res) => {
  res.send('Server is running. Welcome to DriveLogix API!');
});
