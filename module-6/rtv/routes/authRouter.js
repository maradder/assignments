const express = require( "express" )
const authRouter = express.Router()
const User = require( "../models/user" )
const jwt = require( "jsonwebtoken" )



// TODO --- Error message is a little weird for the duplicate users

// SignUp -----Working in Postman
authRouter.post( "/signup", ( req, res, next ) => {
	User.findOne( { username: req.body.username.toLowerCase }, ( err, user ) => {
		if ( err )
		{
			res.status( 500 )
			return next( err )
		}
		if ( user )
		{
			res.status( 403 )
			return next( new Error( "That username already exists" ) )
		}
		const newUser = new User( req.body )
		newUser.save( ( err, savedUser ) => {
			if ( err )
			{
				res.status( 500 )
				return next( err )
			}
			// Payload   // Secret
			const token = jwt.sign( savedUser.withoutPassword(), process.env.SECRET )
			return res.status( 201 ).send( { token, user: savedUser.withoutPassword() } )
		} )
	} )
} )

// Login  -----Working in Postman
authRouter.post( "/login", ( req, res, next ) => {
	User.findOne( { username: req.body.username.toLowerCase() }, ( err, user ) => {
		if ( err )
		{
			res.status( 500 )
			return next( err )
		}
		if ( !user )
		{
			res.status( 403 )
			return next( new Error( "Username or password are incorrect" ) )
		}
		user.checkPassword( req.body.password, ( err, isMatch ) => {
			if ( err )
			{
				res.status( 403 )
				return next( new Error( "Username or password are incorrect" ) )
			}
			if ( !isMatch )
			{
				res.status( 403 )
				return next( new Error( "Username or password are incorrect" ) )
			}
			const token = jwt.sign( user.withoutPassword(), process.env.SECRET )
			return res.status( 200 ).send( { token, user: user.withoutPassword() } )
		} )
	} )
} )

module.exports = authRouter
