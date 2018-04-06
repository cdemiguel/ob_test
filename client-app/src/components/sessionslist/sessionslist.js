import React from "react"

const moment = require("moment")

function SessionsList(props) {
  return (
    <div>
      {props.sessions && props.sessions.map(session => {
        return (
          <div className="section-session-selector mb-2 mt-2">
            <div className="row">
              <div className="col">
                <span>Fecha: </span>
                <span>
                  {moment
                    .unix(session.date / 1000)
                    .format("DD MMM YYYY hh:mm a")},
                </span>
                <span> Disponibilidad: </span>
                <span>{session.availability}</span>
              </div>
              <div className="col-sm-auto">
                <i
                  onClick={() => props.onAddToCart(session)}
                  className="icon-control"
                >
                  +
                </i>
                <span>{session.quantity}</span>
                <i
                  onClick={() => props.onDeleteToCart(session)}
                  className="icon-control"
                >
                  -
                </i>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default SessionsList
