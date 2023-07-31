const Course = require("../database/models/Course");

// ---------------------------------------------------
// COURSE CONTROLLERS
// ---------------------------------------------------


const fetchCourse = async (req, res) => {
  // extract the instructor id and fetch the courses
  // created by this instructor only
  const courses = await Course.find();
  res.status(200).send(courses);
}

const addCourse = async (req, res) => {
  const { name } = req.body;
  if (!name)
    throw new Error("Course name not provided");
  const course = await Course.create({ name });
  res.status(200).send(course);
}

const deleteCourse = async (req, res) => {
  // gotta add an middleware which deletes all of its modules
  // lessons and quizzes

  // as of now deleting only the course
  const { _id } = req.body;
  if (!_id)
    throw new Error("Course id not provided");
  const deletedCourse = await Course.findByIdAndDelete(_id);
  res.status(200).send(deletedCourse);
}

const editCourse = async (req, res) => {
  const { _id, newName } = req.body;
  if (!_id || !newName)
    throw new Error("Insufficient data");
  const updatedCourse = await Course.findByIdAndUpdate(_id, { name: newName }, { new: true });
  res.status(200).send(updatedCourse);
}




// ---------------------------------------------------
// MODULE CONTROLLERS
// ---------------------------------------------------

const fetchModule = async (req, res) => {

}

const addModule = async (req, res) => {

}

const deleteModule = async (req, res) => {

}

const editModule = async (req, res) => {

}



// ---------------------------------------------------
// QUIZ CONTROLLERS
// ---------------------------------------------------

const fetchQuiz = async (req, res) => {

}

const addQuiz = async (req, res) => {

}

const deleteQuiz = async (req, res) => {

}

const editQuiz = async (req, res) => {

}




// ---------------------------------------------------
// LESSON CONTROLLERS
// ---------------------------------------------------

const fetchLesson = async (req, res) => {

}

const addLesson = async (req, res) => {

}

const deleteLesson = async (req, res) => {

}

const editLesson = async (req, res) => {

}


module.exports = {
  fetchCourse,
  addCourse,
  editCourse,
  deleteCourse,
  fetchModule,
  addModule,
  editModule,
  deleteModule,
  fetchQuiz,
  addQuiz,
  editQuiz,
  deleteQuiz,
  fetchLesson,
  addLesson,
  editLesson,
  deleteLesson,
}