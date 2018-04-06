import React from "react"
import { Link } from "react-router-dom"

function NavigationBack() {
  return (
    <section className="container">
      <div className="row mb-3 nav-return">
        <div className="col-12">
          <p className="text-right">
          <Link to={`/events`}>
            <a href="#">Volver</a>
          </Link>
          </p>
        </div>
      </div>
    </section>
  )
}

export default NavigationBack
