const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // Hardcoded port
const db = require('./mongoose'); // Ensure your MongoDB connection is properly set up

// Allowed origins for CORS
const allowedOrigins = [
  'http://localhost:3000', 
  'https://poornima-resources.vercel.app'
];

// CORS options
const corsOptions = {
  origin: (origin, callback) => {
    console.log(`Incoming origin: ${origin}`); // Log the origin for debugging
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Enable credentials for cookies and headers
};

// Middleware
app.use(cors(corsOptions)); // Apply CORS settings globally
app.options('*', cors(corsOptions)); // Handle preflight requests

app.use(express.json()); // Parse JSON requests

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// API Routes
app.use('/api', require('./CreateUser')); // Ensure CreateUser module is exporting a router
app.use('/api', require('./DisplayData')); // Ensure DisplayData module is exporting a router

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
