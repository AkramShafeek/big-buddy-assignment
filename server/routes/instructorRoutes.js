const express = require('express');
const router = express.Router();
const { fetchCourse, addCourse, editCourse, deleteCourse } = require('../controllers/instructorController');
const { addModule, editModule, deleteModule, fetchModule } = require('../controllers/instructorController');
const { addQuiz, editQuiz, deleteQuiz, fetchQuiz } = require('../controllers/instructorController');
const { addLesson, editLesson, deleteLesson, fetchLesson } = require('../controllers/instructorController');
const { instructorAuthMiddleware } = require('../auth/authMiddleware');

router.route('/getCourse').get(instructorAuthMiddleware,fetchCourse);
router.route('/addCourse').post(instructorAuthMiddleware,addCourse);
router.route('/editCourse').put(instructorAuthMiddleware,editCourse);
router.route('/deleteCourse').delete(instructorAuthMiddleware,deleteCourse);

router.route('/getModule').get(fetchModule);
router.route('/addModule').post(addModule);
router.route('/editModule').put(editModule);
router.route('/deleteModule').delete(deleteModule);

router.route('/getQuiz').get(fetchQuiz);
router.route('/addQuiz').post(addQuiz);
router.route('/editQuiz').put(editQuiz);
router.route('/deleteQuiz').delete(deleteQuiz);

router.route('/getLesson').get(fetchLesson);
router.route('/addLesson').post(addLesson);
router.route('/editLesson').put(editLesson);
router.route('/deleteLesson').delete(deleteLesson);


module.exports = router;