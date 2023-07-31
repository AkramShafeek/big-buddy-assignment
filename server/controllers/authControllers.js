const { generateInstructorToken, generateStudentToken } = require("../auth/generateToken");
const Instructor = require("../database/models/Instructor");
const Student = require("../database/models/Student");

const instructorSignup = async (req, res) => {
  const { username, email, password } = req.body;

  const instructor = await Instructor.create({ username, email, password });

  res.status(200).send("Signup successful");
}

const instructorLogin = async (req, res) => {
  const { email, password } = req.body;

  const instructor = await Instructor.findOne({ email: email });
  if (!instructor || instructor.password !== password)
    throw new Error("Invalid username or password");

  const token = generateInstructorToken(instructor._id);

  instructor.password = undefined;
  const user = { ...(instructor._doc), role: 'instructor' };
  res.status(200).send({ user: user, token: token });
}

const studentSignup = async (req, res) => {
  const { username, email, password } = req.body;

  const student = await Student.create({ username, email, password });

  res.status(200).send("Signup successful");
}

const studentLogin = async (req, res) => {
  const { email, password } = req.body;

  const student = await Student.findOne({ email: email });
  if (!student || student.password !== password)
    throw new Error("Invalid username or password");

  const token = generateStudentToken(student._id);

  student.password = undefined;
  const user = { ...(student._doc), role: 'student' };
  res.status(200).send({ user: user, token: token });
}


module.exports = {
  instructorSignup,
  instructorLogin,
  studentSignup,
  studentLogin
};