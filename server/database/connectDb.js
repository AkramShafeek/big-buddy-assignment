const mongoose = require('mongoose');

const connectDb = async (mongoURI) => {
  await mongoose.connect(mongoURI);
}

module.exports = connectDb;