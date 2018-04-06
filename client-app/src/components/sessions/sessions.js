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
      cart: []
    }
  }

  componentDidMount() {
    apiClient
      .getEvent(this.props.match.params.id)
      .then(event => {
        event.data.sessions.map(session => {
          session.quantity = 0
          return session
        })

        document.title = `Sessions ${event.data.event.title}`

        this.setState({ events: event.data })
      })
      .then(() => {
        if (localStorage.getItem("cart")) {
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

    if (localStorage.getItem("cart")) {
      cart = store.getCart() 
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

  store.setCart(cart)

    this.setState({ events:event, cart })
  }

  deleteToCart = session => {
    const event = this.state.events

    event.sessions.map(item => {
      if (item.date === session.date && item.quantity > 0) {
        item.quantity--
      }
      return item
    })

    let cart = store.getCart() 
    
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

    this.setState({ events:event, cart })
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
                <SessionsList
                  sessions={this.state.events.sessions}
                  onAddToCart={this.addToCart}
                  onDeleteToCart={this.deleteToCart}
                />
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
