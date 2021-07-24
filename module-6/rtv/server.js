const express = require( "express" )
const app = express()
require( "dotenv" ).config()
const morgan = require( "morgan" )
const mongoose = require( "mongoose" )
const expressJwt = require( "express-jwt" )


process.env.SECRET

// Middleware
app.use( express.json() )
app.use( morgan( "dev" ) )

// Connext to the database
mongoose.connect(
	"mongodb+srv://marcus:bVX7tuFWgXZPTjEi@cluster2.egjvw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
	() => console.log( "Connected to the DB" )
)

// Test get request to the root path
app.get( "/", ( req, res ) => {
	res.send( "Hello from the server" )
	console.log( "Success" )
} )

// routes
app.use( "/auth", require( "./routes/authRouter" ) )
app.use( '/api', expressJwt( { secret: process.env.SECRET, algorithms: ['HS256'] } ) )
app.use( "/api/issues", require( "./routes/issueRouter" ) )
app.use( "/api/comments", require( "./routes/commentRouter" ) )

// Error handling
app.use( ( err, req, res, next ) => {
	console.log( err )
	if ( err.name === "UnauthorizedError" )
	{
		res.status( err.status )
	}
	return res.send( { errMsg: err.message } )
} )

// Start the server
app.listen( 9000, () => console.log( "The server is running on port 9000" ) )
