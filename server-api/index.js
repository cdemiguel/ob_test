require("dotenv").config()

const port = process.env.PORT

const express = require('express')

const eventRoute = require("./src/routes")

const app = express();

const cors = require("cors")
app.use(cors())

app.use("/events", eventRoute)

app.listen(port, () => console.log(`server running at ${port}`))
