const mongoose = require('mongoose');
require('dotenv').config();
// const dbURI = process.env.MONGODB_URI;
const dbURI = process.env.MONGO_URI


mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "StudentsHelp"
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('Connection error:', err);
});

db.once('open', async () => {
  console.log("DB connected");

  try {
    const data = db.db.collection("PYQS");
    // console.log("Collection Food_items accessed:");

    const result = await data.find({}).toArray();
    // console.log("Food_items fetched:");

    const data2 = db.collection("Btech2ndYear");
    // console.log("Collection Food_category accessed:");

    const result2 = await data2.find({}).toArray();
    // console.log("Food_category fetched:");

    if (result && result2) {
      global.data = result;
      global.data2 = result2;
      console.log('All data loaded');
    } else {
      console.log('No data found');
    }
  } catch (err) {
    console.error('Error fetching data:', err);
  }
});

module.exports = db;
