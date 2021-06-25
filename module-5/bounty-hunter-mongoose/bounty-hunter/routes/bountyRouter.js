const express = require("express")
const Bounty = require("../models/bounty")
const bountyRouter = express.Router()

// Retrieve One => working in Postman
bountyRouter.get("/:bountyId", (req, res, next) => {
	Bounty.find({ _id: req.params.bountyId }, (err, oneBounty) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.send(oneBounty)
	})
})

// Retrieve All => working in Postman
bountyRouter.get("/", (req, res, next) => {
	Bounty.find((err, bounties) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.send(bounties)
	})
})
// })

// Create One => working in Postman
bountyRouter.post("/", (req, res) => {
	const newBounty = new Bounty(req.body)
	newBounty.save((err, savedBounty) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(201).send(savedBounty)
	})
})

// Update One => working in Postman
bountyRouter.put("/:bountyId", (req, res) => {
	Bounty.findByIdAndUpdate(
		{ _id: req.params.bountyId },
		req.body,
		{ new: true },
		(err, updatedBounty) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res.status(200).send(updatedBounty)
		}
	)
})

// Destroy One => working in Postman
bountyRouter.delete("/:bountyId", (req, res, next) => {
	Bounty.findOneAndDelete(
		{ _id: req.params.bountyId },
		(err, deletedBounty) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res.status(200).send(`Successfully updated ${deletedBounty.name}`)
		}
	)
})

module.exports = bountyRouter
