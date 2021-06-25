const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const itemSchema = new Schema({
	item: String,
	category: {
		type: String,
		required: true,
		enum: ["sports", "homeGarden", "automotive", "clothing"],
	},
	regularPrice: Number,
	salePrice: Number,
	onSale: Boolean,
	qtyOnHand: Number,
})

module.exports = mongoose.model("Item", itemSchema)
