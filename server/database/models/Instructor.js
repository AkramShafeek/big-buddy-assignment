const mongoose = require('mongoose')

const instructorSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});

const Instructor = mongoose.model('instructors', instructorSchema);
module.exports = Instructor;