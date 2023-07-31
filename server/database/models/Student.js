const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
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

const Student = mongoose.model('students', studentSchema);
module.exports = Student;