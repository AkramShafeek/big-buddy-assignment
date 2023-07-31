require('dotenv').config();
const express = require('express');
const app = express();
const connectDb = require("./database/connectDb");
const User = require('./database/models/User');

app.use(express.json());

app.get('/', async (req, res) => {
  const users = await User.find();
  res.status(200).send(users);
});

app.post('/', async (req, res) => {
  try {    
    const user = await User.create(req.body);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send("Internal server error")
  }
})

app.use((err, req, res, next) => {
  res.status(500).send("Internal server error");
})

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDb(MONGO_URI);
    console.log("Connected to database");
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
  } catch (error) {
    console.log("Couldn't start server due to db error");
    console.log(error);
  }
}

startServer();