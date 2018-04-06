import React from "react"

const moment = require("moment")

function Cart(props) {
  return (
    <div>
      <div className="section-shopping-cart-item">
        <div className="row align-items-center">
          {props.cart &&
            props.cart.map(event => {
              return (
                <div>
                  <div className="col-12 pb-1">
                    <p className="text-dark">{event.event.title}</p>
                  </div>
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
                          <div className="col-sm-auto">
                            <span>x{session.quantity}</span>
                          </div>
                          <div className="col-sm-auto">
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
// { props.event ? props.event.event? props.event.event.title?
//     <div className="col-12 pb-1">
//       <p className="text-dark">{props.event.event.title}</p>
//     </div>:null :null:null
//   }
//   </div>
//   {props.event.sessions && props.event.sessions.map(session => {
//     return (
//       <div className="row align-items-center pt-1 pb-1">
//         <div className="col">
//           <span>
//             {moment
//               .unix(session.date / 1000)
//               .format("DD MMM YYYY hh:mm a")}
//           </span>
//         </div>
//         <div className="col-sm-auto">
//           <span>x{session.quantity}</span>
//         </div>
//         <div className="col-sm-auto">
//           <img
//             className="img-fluid mx-auto d-block"
//             src="../../images/trash.png"
//             alt="delete-icon"
//             onClick={() => props.onDeleteToCart(session)}
//           />
//         </div>
//       </div>
//     )
//   })}
