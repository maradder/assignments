const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const app = express()
const PORT = 9000
const secrets = require("./.secrets.js")

app.use(express.json())
app.use(morgan("dev"))

// Connect to DB
mongoose.connect(
	"mongodb://localhost:27017/inventory",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
	() => console.log("Connected to the db")
)

// Routes
app.use("/inventory", require("./routes/itemRouter"))

app.get("/", (req, res) => console.log("hello"))

// Error Handler
app.use((err, req, res, next) => {
	console.log(err)
	return res.send({ errMsg: err.message })
})

app.listen(PORT, () => {
	return console.log(`The server is listening on Port: ${PORT}`)
})
