const axios = require("axios")

const api_client = {
  baseUrl() {
    return `${this.protocol}://${this.host}:${this.port}`
  },
  getEvents() {
    return axios
        .get(`${this.baseUrl()}/api/events`)
        .then(res => res.data)
  },
  getEvent(eventId) {
      return axios
        .get(`${this.baseUrl()}/api/events/event/${eventId}`)
        .then(res => res.data)
  }
}

module.exports = api_client
