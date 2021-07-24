const mongoose = require( "mongoose" )
const Schema = mongoose.Schema

const issueSchema = new Schema( {
	issue: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	totalVotes: {
		type: Number,
		required: true
	},
	upVotes: {
		type: Number,
		required: true
	},
	downVotes: {
		type: Number,
		required: true
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true
	},
	username: {
		type: String,
		ref: "User",
		required: true
	},
	comments: {
		type: Array,
		required: true
	}
} )

module.exports = mongoose.model( "Issue", issueSchema )
