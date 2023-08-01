const Course = require("../database/models/Course");
const Lesson = require("../database/models/Lesson");
const Module = require("../database/models/Module");
const Quiz = require("../database/models/Quiz");


// ---------------------------------------------------
// COURSE CONTROLLERS
// ---------------------------------------------------

const fetchCourse = async (req, res) => {
  // extract the instructor id and fetch the courses
  // created by this instructor only
  const courses = await Course.find();
  await Module.populate(courses, { path: 'modules' });
  // courses.modules.forEach(async (module) => {
  //   console.log(module);
  // })
  await Lesson.populate(courses, { path: 'modules.lessons' });
  await Quiz.populate(courses, { path: 'modules.quizzes' });
  res.status(200).send(courses);
}

const addCourse = async (req, res) => {
  // yet to add instructor id 
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
  const modules = await Module.find();

  res.send(modules);
}

const addModule = async (req, res) => {
  const { course, moduleName } = req.body;
  if (!course || !moduleName)
    throw new Error("Insufficient data");

  const courseRef = await Course.findById(course);
  if (!courseRef)
    throw new Error("Given course doesn't exist");

  const module = await Module.create({ name: moduleName });

  courseRef.modules.push(module._id);
  await courseRef.save();

  res.status(200).send({ course: courseRef, module: module });
}

const deleteModule = async (req, res) => {
  const { course, module } = req.body;
  if (!course || !module)
    throw new Error("Insufficient data");

  const courseRef = await Course.findById(course);
  if (!courseRef)
    throw new Error("Given course doesn't exist");

  const deletedModule = await Module.findByIdAndDelete(module);
  if (!deletedModule)
    throw new Error("Given module doesn't exist");

  const resultantCourse = await Course.findByIdAndUpdate(course, { $pull: { modules: module } }, { new: true });

  res.status(200).send({ course: resultantCourse, deletedModule: deletedModule });
}

const editModule = async (req, res) => {
  const { module, newName } = req.body;
  if (!module || !newName)
    throw new Error("Insufficient data");

  const updatedModule = await Module.findByIdAndUpdate(module, { name: newName }, { new: true });

  if (!updatedModule)
    throw new Error("Given module doesn't exist");

  res.status(200).send(updatedModule);
}



// ---------------------------------------------------
// QUIZ CONTROLLERS
// ---------------------------------------------------

const fetchQuiz = async (req, res) => {
  const quizzes = await Quiz.find();
  res.status(200).send(quizzes);
}

const addQuiz = async (req, res) => {
  const { module, quizName } = req.body;
  if (!module || !quizName)
    throw new Error("Insufficient data");

  const moduleRef = await Module.findById(module);
  if (!moduleRef)
    throw new Error("Given module doesn't exist");

  const quiz = await Quiz.create({ name: quizName });

  moduleRef.quizzes.push(quiz._id);
  await moduleRef.save();

  res.status(200).send({ module: moduleRef, quiz: quiz });
}

const deleteQuiz = async (req, res) => {
  const { module, quiz } = req.body;
  if (!module || !quiz)
    throw new Error("Insufficient data");

  const moduleRef = await Module.findById(module);
  if (!moduleRef)
    throw new Error("Given module doesn't exist");
  if (moduleRef.quizzes.includes(quiz)) {
    const deletedQuiz = await Quiz.findByIdAndDelete(quiz);
    if (!deletedQuiz)
      throw new Error("Given quiz doesn't exist");
    const resultantModule = await Module.findByIdAndUpdate(module, { $pull: { quizzes: quiz } }, { new: true });
    res.status(200).send({ module: resultantModule, deletedQuiz: deletedQuiz });
  }
  else
    throw new Error("Given quiz doesn't exist in the given course");
}

const editQuiz = async (req, res) => {
  const { quiz, newName } = req.body;
  if (!quiz || !newName)
    throw new Error("Insufficient data");

  const updatedQuiz = await Quiz.findByIdAndUpdate(quiz, { name: newName }, { new: true });
  if (!updatedQuiz)
    throw new Error("Given quiz doesn't exist");

  res.status(200).send(updatedQuiz);
}



// ---------------------------------------------------
// LESSON CONTROLLERS
// ---------------------------------------------------

const fetchLesson = async (req, res) => {
  const lessons = await Lesson.find();
  res.status(200).send(lessons);
}

const addLesson = async (req, res) => {
  const { module, lessonName } = req.body;
  if (!module || !lessonName)
    throw new Error("Insufficient data");

  const moduleRef = await Module.findById(module);
  if (!moduleRef)
    throw new Error("Given module doesn't exist");

  const lesson = await Lesson.create({ name: lessonName });

  moduleRef.lessons.push(lesson._id);
  await moduleRef.save();

  res.status(200).send({ module: moduleRef, lesson: lesson });
}

const deleteLesson = async (req, res) => {
  const { module, lesson } = req.body;
  if (!module || !lesson)
    throw new Error("Insufficient data");

  const moduleRef = await Module.findById(module);
  if (!moduleRef)
    throw new Error("Given module doesn't exist");
  if (moduleRef.lessons.includes(lesson)) {
    const deletedLesson = await Lesson.findByIdAndDelete(lesson);
    if (!deletedLesson)
      throw new Error("Given lesson doesn't exist");
    const resultantModule = await Module.findByIdAndUpdate(module, { $pull: { lessons: lesson } }, { new: true });
    res.status(200).send({ module: resultantModule, deletedLesson: deletedLesson });
  }
  else
    throw new Error("Given lesson doesn't exist in the given course");
}

const editLesson = async (req, res) => {
  const { lesson, newName } = req.body;
  if (!lesson || !newName)
    throw new Error("Insufficient data");

  const updatedLesson = await Lesson.findByIdAndUpdate(lesson, { name: newName }, { new: true });
  if (!updatedLesson)
    throw new Error("Given lesson doesn't exist");

  res.status(200).send(updatedLesson);
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