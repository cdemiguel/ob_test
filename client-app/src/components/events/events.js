import React, { Component } from "react"

import apiClient from "../../utils/api"
import { Link } from "react-router-dom"

const moment = require("moment")

class Events extends Component {
  constructor() {
    super()
    this.state = {
      events: []
    }
  }

  componentDidMount() {
    apiClient.getEvents().then(_events => {
      if (_events.status === "OK") {
        const eventsData = _events.data

        const events = eventsData.map(event => ({
          ...event,
          description: event.description.replace(/<\/?[^>]+>/gi, "")
        }))

        events.sort((item,_item) => { 
          return item.startDate - _item.startDate
        })

        this.setState({ events })
      }
    })

    document.title = "Catalog"
  }

  render() {
    const { events } = this.state

    return (
      <section className="container section-gallery">
        <div className="row">
          {events &&
            events.map((event, index) => (

              <div key={event.id} className="col-12 col-md-6 mb-4">
              <div  className="section-event d-flex flex-column">
                  <div className="section-event-header p-3">
                    <p className="mb-1">{event.title}</p>
                    <p>{event.subtitle}</p>
                  </div>
                  <div className="section-event-image">
                    <img
                      className="img-fluid"
                      src="../../images/sample-image.jpg"
                      alt="event"
                    />
                  </div>
                  <div className="section-event-info p-3">
                    <p className="dates mb-1">
                      <span>
                        {moment
                          .unix(event.startDate / 1000)
                          .format("DD MMM YYYY hh:mm a")}
                      </span>
                      <span> - </span>
                      <span>
                        {moment
                          .unix(event.endDate / 1000)
                          .format("DD MMM YYYY hh:mm a")}
                      </span>
                    </p>
                    <p className="location mb-1">
                      <span>{event.place}</span>
                    </p>
                    <p className="description d-none d-sm-block">
                      {event.description}
                    </p>
                  </div>
                  <div className="section-event-button d-flex align-items-end">
                    <Link to={`/events/${event.id}`}>
                      <button>comprar</button>
                    </Link>
                  </div>
              </div>
              </div>
            ))}
        </div>
      </section>
    )
  }
}

export default Events
