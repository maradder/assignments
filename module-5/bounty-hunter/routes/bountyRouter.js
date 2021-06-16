const express = require("express");
const { v4: uuidv4 } = require("uuid");
const bountyRouter = express.Router();

let bounties = [
  {
    firstName: "Luke",
    lastName: "Skywalker",
    isLiving: true,
    bountyAmt: 2000,
    type: "jedi",
    _id: uuidv4(),
  },
  {
    firstName: "Obi-Wan",
    lastName: "Kenobi",
    isLiving: true,
    bountyAmt: 1600,
    type: "jedi",
    _id: uuidv4(),
  },
  {
    firstName: "Darth",
    lastName: "Vader",
    isLiving: false,
    bountyAmt: 3500,
    type: "sith",
    _id: uuidv4(),
  },
];

// Retrieve One -> working
bountyRouter.get("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const foundBounty = bounties.find((bounty) => bounty._id === bountyId);
  res.send(foundBounty);
});

// Retrieve All -> working
bountyRouter.get("/", (req, res) => {
  res.send(bounties);
});

// Create One -> working
bountyRouter.post("/", (req, res) => {
  const newBounty = req.body;
  newBounty._id = uuidv4();
  bounties.push(newBounty);
  res.send(
    `Successfully added ${newBounty.firstName} ${newBounty.lastName} to the list of bounties`
  );
});

// Update One -> working
bountyRouter.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId);
  const updatedBounty = Object.assign(bounties[bountyIndex], req.body);
  res.send(updatedBounty);
});

// Destroy One -> working
bountyRouter.delete("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId);
  bounties.splice(bountyIndex, 1);
  res.send("Successfully deleted the bounty");
});

module.exports = bountyRouter;
