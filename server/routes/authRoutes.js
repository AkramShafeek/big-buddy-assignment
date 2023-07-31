const express = require('express');
const router = express.Router();
const { instructorSignup, instructorLogin, studentSignup, studentLogin } = require("../controllers/authControllers");

router.route('/instructor/signup').post(instructorSignup);
router.route('/instructor/login').post(instructorLogin);
router.route('/student/signup').post(studentSignup);
router.route('/student/login').post(studentLogin);

module.exports = router;