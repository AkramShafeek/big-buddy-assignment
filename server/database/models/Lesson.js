const mongoose = require('mongoose')

const lessonSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  }  
});

const Lesson = mongoose.model('lessons', lessonSchema);
module.exports = Lesson;