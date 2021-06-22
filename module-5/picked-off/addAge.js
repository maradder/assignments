const express = require("express")
const ObjectToSend = require("./server")

const addAge = (req, res, next) => {
	ObjectToSend.age = 37
	next()
}

module.exports = addAge
