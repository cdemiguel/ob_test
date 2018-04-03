const eventInfo68 = require("../data/event-info-68.json")
const eventInfo184 = require("../data/event-info-184.json")

function eventSelect(id) {
  if (id == 68) {
    eventInfo = eventInfo68
  } else {
    eventInfo = eventInfo184
  }
  return eventInfo
}

module.exports = eventSelect
