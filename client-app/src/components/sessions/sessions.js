import React, { Component } from "react"

import store from "../../utils/store"
import apiClient from "../../utils/api"
import NavigationBack from "../navigation/navigationback"
import SessionsList from "../sessionslist/sessionslist"
import Cart from "../cart/cart"

class Sessions extends Component {
  constructor() {
    super()
    this.state = {
      events: [],
      cart: [],
      noDataInfo: false
    }
  }

  componentDidMount() {
    apiClient
      .getEvent(this.props.match.params.id)
      .then(event => {
        if (event.status != "KO") {
          event.data.sessions.map(session => {
            session.quantity = 0
            return session
          })

          document.title = `Sessions ${event.data.event.title}`

          this.setState({ events: event.data })
        } else {
          this.setState({ noDataInfo: true })
        }
      })
      .then(() => {
        if (store.getCart()) {
          const cart = store.getCart()
          this.setState({ cart })
        }
      })
  }

  addToCart = session => {
    const event = this.state.events
    let cart = []
    let eventExist = -1

    event.sessions.map(item => {
      if (item.date === session.date && item.quantity < item.availability)
        item.quantity++
      return item
    })

    if (store.getCart()) {
      cart = store.getCart()
      eventExist = cart.map(item => item.event.id).indexOf(event.event.id)
    }

    if (eventExist < 0) {
      cart.push(event)
    } else {
      cart.map(item => {
        return item.sessions.map(item => {
          return item.date === session.date && item.quantity < item.availability
            ? item.quantity++
            : ""
        })
      })
    }

    store.setCart(cart)

    this.setState({ events: event, cart })
  }

  deleteToCart = session => {
    let event = this.state.events

    event.sessions.map(item => {
      if (item.date === session.date && item.quantity > 0) {
        item.quantity--
      }
      return item
    })

    let cart = store.getCart()

    let eventExist = cart.map(item => item.event.id).indexOf(event.event.id)

    if (eventExist < 0) {
      cart.push(event)
      cart.map(item => {
        return item.sessions.map(item => {
          return item.date === session.date && item.quantity > 0 ? item.quantity-- : ""
        })
      })
    } else {
      cart.map(item => {
        return item.sessions.map(item => {
          return item.date === session.date && item.quantity > 0 ? item.quantity-- : ""
        })
      })
    }

    var result = event.sessions.every(item => {
      return item.quantity == 0
    })
    if (result) {
      cart = cart.filter(e => {
        return e.event.title != event.event.title
      })
    }

  let flagCleanTitleList
    cart.forEach( function (arrayItem){
      flagCleanTitleList = arrayItem.sessions.every(session => {
        return session.quantity == 0
      })
    })

    if(flagCleanTitleList) {
      cart = []
    }

    this.setState({ events: event, cart })
    store.setCart(cart)
  }

  render() {
    return (
      <div>
        <NavigationBack />
        <section className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="section-sessions-selector p-3">
                {!this.state.noDataInfo ? (
                  <SessionsList
                    sessions={this.state.events.sessions}
                    onAddToCart={this.addToCart}
                    onDeleteToCart={this.deleteToCart}
                  />
                ) : (
                  <p>No hay data para este evento</p>
                )}
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="section-shopping-cart p-3">
                <Cart
                  cart={this.state.cart}
                  title={this.state.events.title}
                  onDeleteToCart={this.deleteToCart}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Sessions
