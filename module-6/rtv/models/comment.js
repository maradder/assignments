const mongoose = require( 'mongoose' )
const Schema = mongoose.Schema

const commentSchema = new Schema( {
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    username: {
        type: String,
        ref: "User",
        required: true
    },
    issueId: {
        type: Schema.Types.ObjectId,
        ref: "Issue",
        required: true
    },
    comment: {
        type: String,
        required: true
    }
} )

module.exports = mongoose.model( "Comment", commentSchema )