const express = require('express');
const router = express.Router();
const { fetchCourse, addCourse, editCourse, deleteCourse } = require('../controllers/instructorController');

router.route('/').get(fetchCourse);
router.route('/addcourse').post(addCourse);
router.route('/editcourse').put(editCourse);
router.route('/deletecourse').delete(deleteCourse);


module.exports = router;