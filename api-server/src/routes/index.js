const express = require("express")
const eventRoute = express.Router()

const data = require("../data")

eventRoute.get("/events", (req, res) => {
  let events = data.getEvents()
  if (events.length) {
    res.json({
      status: "OK",
      message: "events recieved OK!",
      data: events
    })
  } else {
    res.json({
      status: "KO"
    })
  }
})

eventRoute.get("/events/event/:id", (req, res) => {
  const { params: { id } } = req
  let event = data.getEvent(id)
  if (event) {
    res.json({
      status: "OK",
      message: "event recieved OK!",
      data: event
    })
  } else {
    res.json({
      status: "KO"
    })
  }
})

module.exports = eventRoute
