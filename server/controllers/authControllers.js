const Instructor = require("../database/models/Instructor");
const Student = require("../database/models/Student");

const instructorSignup = async (req, res) => {
  const { username, email, password } = req.body;

  const instructor = await Instructor.create({ username, email, password });

  res.status(200).send("Signup successful");
}

const instructorLogin = async (req, res) => {

}

const studentSignup = async (req, res) => {
  const { username, email, password } = req.body;

  const student = await Student.create({ username, email, password });

  res.status(200).send("Signup successful");
}

const studentLogin = async (req, res) => {

}


module.exports = {
  instructorSignup,
  instructorLogin,
  studentSignup,
  studentLogin
};