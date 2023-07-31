const mongoose = require('mongoose')

const courseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  enrollments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'students'    
  }],
  modules: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'modules'
  }]
});

const Course = mongoose.model('courses', courseSchema);
module.exports = Course;