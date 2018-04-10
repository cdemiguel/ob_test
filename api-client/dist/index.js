"use strict";

var axios = require("axios");

var apiClient = {
  baseUrl: function baseUrl() {
    return "" + this.url;
  },
  getEvents: function getEvents() {
    return axios.get(this.baseUrl() + "/events").then(function (res) {
      return res.data;
    });
  },
  getEvent: function getEvent(eventId) {
    return axios.get(this.baseUrl() + "/events/event/" + eventId).then(function (res) {
      return res.data;
    });
  }
};

module.exports = apiClient;
