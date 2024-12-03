const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // Server will run on this port
const db = require('./mongoose'); // Ensure your MongoDB connection is properly set up

// Allowed origins for CORS
const allowedOrigins = [
  'http://localhost:3000', 
  'https://poornima-resources.vercel.app',
];

// CORS options configuration
const corsOptions = {
  origin: (origin, callback) => {
    console.log(`Incoming origin: ${origin}`); // Debug log for incoming origin
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true); // Allow the request
    } else {
      callback(new Error('Not allowed by CORS')); // Deny the request
    }
  },
  credentials: true, // Enable credentials (e.g., cookies, authorization headers)
};

// Middleware setup
app.use(cors(corsOptions)); // Apply CORS settings globally
app.options('*', cors(corsOptions)); // Handle preflight requests explicitly
app.use(express.json()); // Middleware to parse JSON request bodies

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// API Routes (Ensure these modules export a router)
app.use('/api', require('./CreateUser')); // Include CreateUser routes
app.use('/api', require('./DisplayData')); // Include DisplayData routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
