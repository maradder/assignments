const express = require("express");
const userRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

// Fake data
const users = [
  { name: "Marcus", age: "37", _id: uuidv4() },
  { name: "Vashti", age: "37", _id: uuidv4() },
  { name: "Olivia", age: "13", _id: uuidv4() },
  { name: "Bianca", age: "11", _id: uuidv4() },
  { name: "Benson", age: "8", _id: uuidv4() },
  { name: "Rosalie", age: "6", _id: uuidv4() },
  { name: "Hattie", age: "2", _id: uuidv4() },
  { name: "Louisa", age: "0", _id: uuidv4() },
  { name: "Isaac", age: "0", _id: uuidv4() },
];

userRouter.get("/", (req, res) => {
  res.send(users);
});

userRouter.post("/", (req, res) => {
  const newUser = req.body;
  newUser._id = uuidv4();
  users.push(newUser);
  res.send(`${newUser.name} has been added.`);
});

userRouter.get("/:userId", (req, res) => {
  const userId = req.params.userId;
  const foundUser = users.find((user) => user._id === userId);
  res.send(foundUser);
});

userRouter.get("/search/user", (req, res) => {
  const name = req.query.name;
  const filteredUser = users.filter((user) => user.name === name);
  res.send(filteredUser);
});

module.exports = userRouter;
