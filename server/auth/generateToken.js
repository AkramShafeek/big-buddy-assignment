const jwt = require('jsonwebtoken');

const generateInstructorToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_INSTRUCTOR_SIGN, { expiresIn: "30d" });
};
const generateStudentToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_STUDENT_SIGN, { expiresIn: "30d" });
};


module.exports = { generateInstructorToken, generateStudentToken };