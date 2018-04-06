const express = require("express")
const eventsRouter = express.Router()

const data = require("../data")

eventsRouter.get("/events", (req, res) => {
  let events = data.getEvents()
  if (events.length) {
    res.json({
      status: "OK",
      message: "events listed successfully",
      data: events
    })
  } else {
    res.json({
      status: "KO"
    })
  }
})

eventsRouter.get("/events/event/:id", (req, res) => {
  const { params: { id } } = req
  let event = data.getEvent(id)
  if (event) {
    res.json({
      status: "OK",
      message: `event with id ${id} retrieved successfully`,
      data: event
    })
  } else {
    res.json({
      status: "KO"
    })
  }
})

module.exports = eventsRouter
