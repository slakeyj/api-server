require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// a nice way of destructuring 
const { MONGODB_URI, PORT } = process.env;

(async () => {
  try {
    await mongoose.connect(MONGODB_URI, mongooseOptions);

    const server = require('./src/app');

    // this is from the export of app.js, PORT is from dotenv
    server.start(PORT);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
