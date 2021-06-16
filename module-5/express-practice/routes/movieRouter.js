const express = require("express");
const movieRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const movies = [
  { title: "forrest gump", genre: "drama", _id: uuidv4() },
  { title: "we were soldiers", genre: "action", _id: uuidv4() },
  { title: "big daddy", genre: "comedy", _id: uuidv4() },
  { title: "grownups", genre: "comedy", _id: uuidv4() },
  { title: "frozen", genre: "animated", _id: uuidv4() },
];

movieRouter.use("/", (req, res, next) => {
  console.log("getting Closer");
  next();
});

// Create one
movieRouter.post("/", (req, res) => {
  const newMovie = req.body;
  newMovie._id = uuidv4();
  movies.push(newMovie);
});

// Get all
movieRouter.get("/", (req, res) => {
  res.send(movies);
});

// Retrieve one
movieRouter.get("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const foundMovie = movies.find((movie) => movie._id === movieId);
  res.send(foundMovie);
});

// Update one
movieRouter.put("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const movieIndex = movies.findIndex((movie) => movie._id === movieId);
  const updatedMovie = Object.assign(movies[movieIndex], req.body);
  res.send(updatedMovie);
});

// Destroy one
movieRouter.delete("/:movieId", (req, res) => {
  const movieId = req.params.movieId;
  const movieIndex = movies.findIndex((movie) => movie._id === movieId);
  movies.splice(movieIndex, 1);
  res.send("Successfully deleted movie");
});
module.exports = movieRouter;
