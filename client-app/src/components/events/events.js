import React, { Component } from "react"

import apiClient from "../../utils/index.js"
import { withRouter, Link } from "react-router-dom"

const moment = require("moment")

class Events extends Component {
  constructor() {
    super()
    this.state = {
      eventsList: []
    }
  }

  componentDidMount() {
    apiClient.getEvents().then(events => {
      if (events.status === "OK") {
        const eventsData = events.data

        const eventsList = eventsData.map(event => ({
          ...event,
          description: event.description.replace(/<\/?[^>]+>/gi, "")
        }))

        this.setState({ eventsList })
      }
    })

    document.title = "Catalog"
  }

  render() {
    const { eventsList } = this.state

    return (
      <section className="container section-gallery">
        <div className="row">
          {eventsList &&
            eventsList.map((event, index) => (

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

export default withRouter(Events)
