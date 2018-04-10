import React from "react"

const moment = require("moment")

function Cart(props) {
  return (
    <div>
      <div className="section-shopping-cart-item">
        <div className="row align-items-center">
          {props.cart &&
            props.cart.map((event, index )=> {
              return (
                <div className="col-12 pb-1">
                    <p className="text-dark">{event.event.title}</p>
                  {event.sessions.map(session => {
                    if (session.quantity > 0)
                      return (
                        <div className="row align-items-center pt-1 pb-1">
                          <div className="col">
                            <span>
                              {moment
                                .unix(session.date / 1000)
                                .format("DD MMM YYYY hh:mm a")}
                            </span>
                          </div>
                          <div className="col-auto col-sm-auto">
                            <span>x{session.quantity}</span>
                          </div>
                          <div className="col-auto col-sm-auto">
                            <img
                              className="img-fluid mx-auto d-block"
                              src="../../images/trash.png"
                              alt="delete-icon"
                              onClick={() => props.onDeleteToCart(session)}
                            />
                          </div>
                        </div>
                      )
                  })}
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Cart
