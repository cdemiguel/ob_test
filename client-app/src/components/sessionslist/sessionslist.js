import React from "react"

const moment = require("moment")

function SessionsList(props) {
  return (
    <div className="col-12 col-md-6">
      <div className="section-sessions-selector p-3">
        {props.sessions.map(session => {
          return (
            <div className="section-session-selector mb-2 mt-2">
              <div className="row">
                <div className="col">
                  <span>Fecha:</span>
                  <span>
                    {moment
                      .unix(session.date / 1000)
                      .format("DD MMM YYYY hh:mm a")},{" "}
                  </span>
                  <span>Disponibilidad:</span>
                  <span>{session.availability}</span>
                </div>
                <div className="col-sm-auto">
                  <i
                    onClick={()=>props.onIncrementCount(session.date)}
                    className="icon-control"
                  >
                    +
                  </i>
                  <span>{props.count}</span>
                  <i
                    onClick={()=>props.onDecrementCount(session.date)}
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
    </div>
  )
}

export default SessionsList
