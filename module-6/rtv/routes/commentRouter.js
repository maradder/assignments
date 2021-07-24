const express = require( "express" )
const commentRouter = express.Router()
const Comment = require( "../models/comment" )

//  Get all comments
commentRouter.get( "/", ( req, res, next ) => {
    Comment.find( ( err, comments ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        res.status( 200 ).send( comments )
    } )
} )

// Post new comment
commentRouter.post( "/", ( req, res, next ) => {
    const newComment = new Comment( req.body )
    newComment.save( ( err, savedComment ) => {
        if ( err )
        {
            res.status( 500 )
            return next( err )
        }
        res.status( 201 ).send( savedComment )
    } )
} )

// // Edit comment
// commentRouter.put( "/:commentId", ( req, res, next ) => {
//     const
// } )

// // Delete Comment
// commentRouter.delete( "/:commentId", ( req, res, next ) => {
//     const
// } )

module.exports = commentRouter