import React, { Component } from "react"

import api_client from "../../utils/index.js"
import NavigationBack from "../navigation/navigationback"
import SessionsList from "../sessionslist/sessionslist"

class Sessions extends Component {
  constructor() {
    super()
    this.state = {
      event: "",
      sessions: [],
      count: 0
    }
  }

  componentDidMount() {
    const eventId = this.props.match.params.id
    api_client.getEvent(eventId).then(sessions => {
      console.log(sessions)
      this.setState({ event: sessions.data.event })
      this.setState({ sessions: sessions.data.sessions })
    })
  }

  incrementCount = (date) => {
    console.log(date)
    this.setState({
      count: this.state.count + 1
    });
  }
  decrementCount = (date) => {
    this.setState({
      count: this.state.count - 1
    });
  }


  render() {
    return (
      <div>
        <NavigationBack />
        <section className="container">
          <div className="row">
            <SessionsList
              sessions={this.state.sessions}
              onIncrementCount={this.incrementCount}
              onDecrementCount={this.decrementCount}
              count = {this.state.count}
            />
            {/* <Cart /> */}
          </div>
        </section>
      </div>
    )
  }
}

export default Sessions
