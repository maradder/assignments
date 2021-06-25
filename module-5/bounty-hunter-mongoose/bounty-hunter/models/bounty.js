const mongoose = require("mongoose")
const Schema = mongoose.Schema

// Create Schema
const bountySchema = new Schema({
	name: String,
	isLiving: Boolean,
	bountyAmt: Number,
	type: {
		type: String,
		enum: ["sith", "jedi"],
	},
})

module.exports = mongoose.model("Bounty", bountySchema)
