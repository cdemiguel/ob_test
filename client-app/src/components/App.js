import React, { Component } from "react"
import { Route, HashRouter } from "react-router-dom"

import Header from "./header/header"
import Events from "./events/events"
import Sessions from "./sessions/sessions"

class App extends Component {

  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Route path="/" render={() => <Header />} />
            <Route exact path="/events" render={() => <Events />} />
            <Route
            path="/events/:id"
            render={routeProps => (
              <Sessions sendEventId={this.setEventId} {...routeProps} />
            )}
          />
          </div>
        </HashRouter>
      </div>
    )
  }
}

export default App
