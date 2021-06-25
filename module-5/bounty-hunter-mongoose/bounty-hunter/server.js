const express = require("express")
const app = express()
const mongoose = require("mongoose")
const PORT = 9000
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

// Connect to DB
mongoose.connect(
	"mongodb://localhost:27017/bountyhunter",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false,
	},
	() => console.log("Connected to the db")
)

app.get("/", (req, res) => {
	res.send("Hello from the server")
	console.log("success")
})

app.use("/bounties", require("./routes/bountyRouter"))

// Error Handler
app.use((err, req, res, next) => {
	console.log(err)
	return res.send({ errMsg: err.message })
})

app.listen(PORT, () => {
	console.log("The server is listening on port 9000")
})
