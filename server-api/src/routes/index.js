const logic = require("../logic")
const express = require("express")
const eventRoute = express.Router()

const events= require('../data/events.json')
const eventInfo184 = require('../data/event-info-184.json')
const eventInfo68 = require('../data/event-info-68.json')

eventRoute.get('/', (req, res) => {
    res.json(events)
});

module.exports = eventRoute