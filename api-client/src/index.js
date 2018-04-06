const axios = require("axios")

const apiClient = {
  baseUrl() {
    return `${this.url}`
  },
  getEvents() {
    return axios
        .get(`${this.baseUrl()}/events`)
        .then(res => res.data)
  },
  getEvent(eventId) {
      return axios
        .get(`${this.baseUrl()}/events/event/${eventId}`)
        .then(res => res.data)
  }
}

module.exports = apiClient
