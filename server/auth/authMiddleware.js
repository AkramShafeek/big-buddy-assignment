const jwt = require('jsonwebtoken');
const Instructor = require('../database/models/Instructor');

const instructorAuthMiddleware = async (req, res, next) => {
  console.log("Reached authentication middleware")
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('No token provided');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_INSTRUCTOR_SIGN);
    req.user = await Instructor.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    throw new Error('Not authorized to access this route');
  }

}

const studentAuthMiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('No token provided');
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_STUDENT_SIGN);
    req.user = await Student.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    throw new Error('Not authorized to access this route');
  }

}

module.exports = { instructorAuthMiddleware, studentAuthMiddleware };