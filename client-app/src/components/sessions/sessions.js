import React, { Component } from "react"

import api_client from "../../utils/index.js"
import NavigationBack from "../navigation/navigationback"
import SessionsList from "../sessionslist/sessionslist"
import Cart from "../cart/cart"

class Sessions extends Component {
  constructor() {
    super()
    this.state = {
      event: [],
      cart: []
    }
  }

  componentDidMount() {
    api_client
      .getEvent(this.props.match.params.id)
      .then(event => {
        event.data.sessions.map(session => {
          session.quantity = 0
          return session
        })

        this.setState({ event: event.data })
      })
      .then(() => {
        if (localStorage.getItem("cart")) {
          const cart = JSON.parse(localStorage.getItem("cart"))
          this.setState({ cart })
        }
      })
  }

  addToCart = session => {
    const event = this.state.event
    let cart = []
    let eventExist = -1

    event.sessions.map(item => {
      if (item.date === session.date && item.quantity < item.availability)
        item.quantity++
      return item
    })

    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"))
      eventExist = cart.map(item => item.event.id).indexOf(event.event.id)
    }

    if (eventExist < 0) {
      cart.push(event)
    } else {
      cart.map(item => {
        return item.sessions.map(item => {
          return (item.date === session.date && item.quantity < item.availability)
            ? item.quantity++
            : ""
        })
    })
  }

    localStorage.setItem("cart", JSON.stringify(cart))

    this.setState({ event, cart })
  }

  deleteToCart = session => {
    const event = this.state.event

    event.sessions.map(item => {
      if (item.date === session.date && item.quantity > 0) {
        item.quantity--
      }
      return item
    })

    let cart = JSON.parse(localStorage.getItem("cart"))
    
    let eventExist = cart.map(item => item.event.id).indexOf(event.event.id)

    if(eventExist<0){
      cart.push(event)
    }else{
      cart.map(item => {
        return item.sessions.map(item => {
          return item.date === session.date && item.quantity > 0
            ? item.quantity--
            : ""
        })
      })
    }

    this.setState({ event, cart })
    localStorage.setItem("cart", JSON.stringify(cart))
  }

  render() {
    return (
      <div>
        <NavigationBack />
        <section className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="section-sessions-selector p-3">
                <SessionsList
                  sessions={this.state.event.sessions}
                  onAddToCart={this.addToCart}
                  onDeleteToCart={this.deleteToCart}
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="section-shopping-cart p-3">
                <Cart
                  cart={this.state.cart}
                  title={this.state.event.title}
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
