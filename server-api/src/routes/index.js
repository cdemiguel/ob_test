const express = require("express")
const eventRoute = express.Router()

const eventSelect = require('./eventselect')
const events = require("../data/events.json")
const eventInfo68 = require("../data/event-info-68.json")
const eventInfo184 = require("../data/event-info-184.json")

eventRoute.get("/", (req, res) => {
  if (events.length) {
    res.json({
      status: "OK",
      message: "events recieved OK!",
      data: events
    })
  } else {
    res.json({
      status: "KO",
    })
  }
})

eventRoute.get("/event/:id", (req, res) => {
  const { params: { id } } = req

  let eventInfo = eventSelect(id)

  if (eventInfo) {
    res.json({
      status: "OK",
      message: "events recieved OK!",
      data: eventInfo
    })
  } else {
    res.json({
      status: "KO",
    })
  }
})

module.exports = eventRoute
