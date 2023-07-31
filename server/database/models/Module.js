const mongoose = require('mongoose')

const moduleSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lessons: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lessons'    
  }],
  quizzes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'quizzes'
  }],
  exercises: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'exercises'
  }]
});

const Course = mongoose.model('courses', moduleSchema);
module.exports = Course;