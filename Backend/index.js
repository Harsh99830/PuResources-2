const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000; // Server will run on this port
const db = require('./mongoose'); // Ensure your MongoDB connection is properly set up

// Allowed origins for CORS
app.use(cors(
  {
    origin: ["https://poornima-resources.vercel.app/"],
    methods: ["POST","GET"],
    credentials:true
  }
))
// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// API Routes (Ensure these modules export a router)
app.use(express.json())
app.use('/api', require('./CreateUser')); // Include CreateUser routes
app.use('/api', require('./DisplayData')); // Include DisplayData routes

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
