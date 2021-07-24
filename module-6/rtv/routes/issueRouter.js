const express = require( "express" )
const issueRouter = express.Router()
const Issue = require( "../models/issue" )


// Get all issues
issueRouter.get( "/", ( req, res, next ) => {
	Issue.find( ( err, issues ) => {
		if ( err )
		{
			res.status( 500 )
			return next( err )
		}
		return res.send( issues )
	} )
} )

// Get all issues by user
issueRouter.get( "/user", ( req, res, next ) => {
	Issue.find( { user: req.user._id }, ( err, issues ) => {
		if ( err )
		{
			res.status( 500 )
			return next( err )
		}
		return res.send( issues )
	} )
} )

// Get one issue
issueRouter.get( "/:issueId", ( req, res, next ) => {
	Issue.findOne( ( err, foundIssue ) => {
		if ( err )
		{
			res.status( 500 )
			return next( err )
		}
		return res.status( 200 ).send( foundIssue )
	} )
} )

// Add new issue
issueRouter.post( "/", ( req, res, next ) => {
	req.body.user = req.user._id
	req.body.username = req.user.username
	const newIssue = new Issue( req.body )
	newIssue.save( ( err, savedIssue ) => {
		if ( err )
		{
			res.status( 500 )
			return next( err )
		}
		return res.status( 201 ).send( savedIssue )
	} )
} )

// Update one issue
issueRouter.put( "/:issueId", ( req, res, next ) => {
	Issue.findOneAndUpdate(
		{ _id: req.params.issueId, user: req.user._id },
		req.body,
		{ new: true },
		( err, updatedIssue ) => {
			if ( err )
			{
				res.status( 500 )
				return next( err )
			}
			return res.status( 201 ).send( updatedIssue )
		}
	)
} )

// Upvote issue
issueRouter.put( "/upvote/:issueId", ( req, res, next ) => {
	Issue.findOneAndUpdate(
		{ _id: req.params.issueId, user: req.user._id },
		{ $inc: { upVotes: 1, totalVotes: 1 } },
		{ new: true },
		( err, updatedIssue ) => {
			if ( err )
			{
				res.status( 500 )
				return next( err )
			}
			return res.status( 201 ).send( updatedIssue )
		}
	)
} )

// Upvote issue
issueRouter.put( "/downvote/:issueId", ( req, res, next ) => {
	Issue.findOneAndUpdate(
		{ _id: req.params.issueId, user: req.user._id },
		{ $inc: { downVotes: 1, totalVotes: 1, } },
		{ new: true },
		( err, updatedIssue ) => {
			if ( err )
			{
				res.status( 500 )
				return next( err )
			}
			return res.status( 201 ).send( updatedIssue )
		}
	)
} )

// Change Downvote to Upvote issue
issueRouter.put( "/change2upvote/:issueId", ( req, res, next ) => {
	Issue.findOneAndUpdate(
		{ _id: req.params.issueId, user: req.user._id },
		{ $inc: { upVotes: 1, downVotes: -1 } },
		{ new: true },
		( err, updatedIssue ) => {
			if ( err )
			{
				res.status( 500 )
				return next( err )
			}
			return res.status( 201 ).send( updatedIssue )
		}
	)
} )
// Change Upvote to Downvote issue
issueRouter.put( "/change2downvote/:issueId", ( req, res, next ) => {
	Issue.findOneAndUpdate(
		{ _id: req.params.issueId, user: req.user._id },
		{ $inc: { upVotes: -1, downVotes: 1 } },
		{ new: true },
		( err, updatedIssue ) => {
			if ( err )
			{
				res.status( 500 )
				return next( err )
			}
			return res.status( 201 ).send( updatedIssue )
		}
	)
} )

// Delete one Issue - only for issues created by user
issueRouter.delete( "/:issueId", ( req, res, next ) => {
	Issue.findOneAndDelete(
		{ _id: req.params.issueId, user: req.user._id },
		( err, deletedIssue ) => {
			if ( err )
			{
				res.status( 500 )
				return next( err )
			}
			return res.status( 200 ).send( `Successfully deleted issue: ${ deletedIssue.issue }` )
		}

	)
} )

// Delete one issue (created by anyone - admin level)
// issueRouter.delete( "/:issueId", ( req, res, next ) => {
// 	Issue.findOneAndDelete(
// 		{ _id: req.params.issueId },
// 		( err, deletedIssue ) => {
// 			if ( err )
// 			{
// 				res.status( 500 )
// 				return next( err )
// 			}
// 			return res.status( 200 ).send( `Successfully deleted issue: ${ deletedIssue.issue }` )
// 		}

// 	)
// } )


module.exports = issueRouter
