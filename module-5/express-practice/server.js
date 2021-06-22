const express = require("express")
const app = express()
// const morgan = require("morgan")

// Middleware
app.use(express.json()) // Looks for req body and turns it into req.body
// app.use(morgan("dev"))

app.use("/movies", (req, res, next) => {
	console.log("This is going to be a movies request")
	next()
})

// Mount path Endpoint
// Callback Function
app.get("/", (req, res) => {
	res.send("Hello World!")
})

// Routes
app.use("/movies", require("./routes/movieRouter"))
app.use("/tvshows", require("./routes/tvShowRouter"))
app.use("/users", require("./routes/userRouter"))

// port , callback
app.listen(9000, () => {
	console.log("The server is running on Port 9000")
})
