const express = require("express")
const { v4: uuidv4 } = require("uuid")
const bountyRouter = express.Router()

let bounties = [
	{
		name: "Luke Skywalker",
		isLiving: true,
		bountyAmt: 2000,
		type: "jedi",
		_id: "07988543-cb3f-4e18-8592-957d159148b4",
	},
	{
		name: "Obi-Wan Kenobi",
		isLiving: true,
		bountyAmt: 1600,
		type: "jedi",
		_id: "18983e1a-d62b-408e-9beb-6fbfbab7eac4",
	},
	{
		name: "Darth Vader",
		isLiving: false,
		bountyAmt: 3500,
		type: "sith",
		_id: "432bac7b-0b32-4a82-bd35-54384c8a354c",
	},
]

// Retrieve One -> working
bountyRouter.get("/:bountyId", (req, res, next) => {
	const bountyId = req.params.bountyId
	const foundBounty = bounties.find((bounty) => bounty._id === bountyId)
	if (!foundBounty) {
		const error = new Error("The item was not found")
		next(error)
	}
	res.send(foundBounty)
})

// Retrieve All -> working
bountyRouter.get("/", (req, res, next) => {
	return res.status(200).send(bounties)
})
// })

// Create One -> working
bountyRouter.post("/", (req, res) => {
	const newBounty = req.body
	newBounty._id = uuidv4()
	bounties.push(newBounty)
	res.send(`Successfully added ${newBounty.name} to the list of bounties`)
})

// Update One -> working
bountyRouter.put("/:bountyId", (req, res) => {
	const bountyId = req.params.bountyId
	console.log(bounties)
	console.log(bountyId)
	const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId)
	console.log(bountyIndex)
	const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
	res.send(updatedBounty)
})

// Destroy One -> working
bountyRouter.delete("/:bountyId", (req, res) => {
	const bountyId = req.params.bountyId
	console.log(bountyId)
	const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId)
	bounties.splice(bountyIndex, 1)
	res.send("Successfully deleted the bounty")
})

module.exports = bountyRouter
