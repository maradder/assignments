const express = require("express");
const tvShowRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const tvShows = [
  { title: "the office", app: "peacock", _id: uuidv4() },
  { title: "parks and rec ", app: "peacock", _id: uuidv4() },
  { title: "brooklyn 99", app: "peacock", _id: uuidv4() },
  { title: "modern family", app: "peacock", _id: uuidv4() },
  { title: "silicon valley", app: "hbo max", _id: uuidv4() },
];

tvShowRouter.get("/", (req, res) => {
  res.send(tvShows);
});

tvShowRouter.post("/", (req, res) => {
  const newTvShow = req.body;
  newTvShow._id = uuidv4();
  tvShows.push(newTvShow);
  res.send(`Successfully added ${newTvShow.title} to the database`);
});

tvShowRouter.get("/:tvShowId", (req, res) => {
  const tvShowId = req.params.tvShowId;
  const foundShow = tvShows.find((tvShow) => tvShow._id === tvShowId);
  res.send(foundShow);
});

module.exports = tvShowRouter;
