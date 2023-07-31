const mongoose = require('mongoose')

const quizSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }  
});

const Quiz = mongoose.model('quizzes', quizSchema);
module.exports = Quiz;