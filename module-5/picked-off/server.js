const express = require("express")
const app = express()
const { v4: uuidv4 } = require("uuid")
const addAge = require("./addAge")

app.use(express.json())

const ObjectToSend = {
	firstName: "Marcus",
	lastName: "Radder",
	city: "Lynden",
	state: "Washington",
	favoriteCandy: "black liccorice",
}

// Middleware
app.use(addAge)

// Routes
app.get("/", (req, res, next) => {
	res.send(ObjectToSend)
})

// 172.27.174.178:9000/
const PORT = 9000
// const HOST = "172.27.174.178"
// const HOST = "127.0.0.1";
app.listen(PORT, () => {
	console.log(`The server is listening at ${PORT}`)
})

module.exports = ObjectToSend
