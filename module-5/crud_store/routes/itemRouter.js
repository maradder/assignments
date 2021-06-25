const express = require("express")
const Item = require("../models/item.js")
const itemRouter = express.Router()

// Get All => Working in PostMan
itemRouter.get("/", (req, res, next) => {
	// res.send("hello from router")
	Item.find((err, items) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		res.send(items)
	})
})

// Get One => Working in PostMan
itemRouter.get("/:itemId", (req, res, next) => {
	// res.send("hello from router")
	Item.find({ _id: req.params.itemId }, (err, oneItem) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		res.send(oneItem)
	})
})

// Post New => Working in PostMan
itemRouter.post("/", (req, res, next) => {
	const newItem = new Item(req.body)
	newItem.save((err, savedItem) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res.status(201).send(savedItem)
	})
})

// Delete One =>
itemRouter.delete("/:itemId", (req, res, next) => {
	Item.findOneAndDelete({ _id: req.params.itemId }, (err, deletedItem) => {
		if (err) {
			res.status(500)
			return next(err)
		}
		return res
			.status(200)
			.send(`Successfully deteled item: ${deletedItem.item} from the database `)
	})
})

// Update One =>
itemRouter.put("/:itemId", (req, res, next) => {
	Item.findByIdAndUpdate(
		{ _id: req.params.itemId }, // Find the one to update
		req.body, //update object with this data
		{ new: true }, // Send updated version of item
		(err, updatedItem) => {
			if (err) {
				res.status(500)
				return next(err)
			}
			return res.status(201).send(updatedItem)
		}
	)
})

module.exports = itemRouter
