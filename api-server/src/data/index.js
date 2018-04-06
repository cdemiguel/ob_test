const events = require("./events.json")
const eventInfo68 = require("./event-info-68.json")
const eventInfo184 = require("./event-info-184.json")

module.exports = {
  getEvents() {
    return events
  },
  getEvent(id) {
    let event
    if(id === "68") {
      event = eventInfo68
    }else if(id === "184") {
      event = eventInfo184
    }
    return event
  }
}
