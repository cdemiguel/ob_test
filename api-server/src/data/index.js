const events = require("./events.json")
const eventInfo68 = require("./event-info-68.json")
const eventInfo184 = require("./event-info-184.json")

module.exports = {
  getEvents() {
    return events
  },
  getEvent(id) {
    id == 68 ? (event = eventInfo68) : (event = eventInfo184)
    return event
  }
}
