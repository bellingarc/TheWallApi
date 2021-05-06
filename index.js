const functions = require("firebase-functions")
const express = require("express")
const cors = require("cors")
const { getMessages, postMessage } = require("./messages/messages.js")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
app.use(cors())

app.get("/messages", getMessages)

app.post("/messages", postMessage)

exports.app = functions.https.onRequest(app)
