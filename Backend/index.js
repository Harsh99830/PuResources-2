const express = require('express');
require("dotenv").config();
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./mongoose');

const allowedOrigins = [
  'http://localhost:3000', 
  'https://pu-resources-frontend.onrender.com'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('hello world');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}

app.use(express.json());
app.use('/api', require('./CreateUser'));
app.use('/api', require('./DisplayData'));

app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
