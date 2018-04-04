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

      // <div className="App">
      //   <div>

      //     <section className="container section-gallery">
      //       <div className="row">
      //         <div className="col-12 col-md-6 mb-4">
      //           <div className="section-event">
      //             <div className="section-event-header p-3">
      //               <p className="mb-1">JOAN MANEL SERRAT</p>
      //               <p>Antología desordenada</p>
      //             </div>
      //             <div className="section-event-image">
      //               <img
      //                 className="img-fluid"
      //                 src="../../images/sample-image.jpg"
      //                 alt="event-image"
      //               />
      //             </div>
      //             <div className="section-event-info p-3">
      //               <p className="dates mb-1">
      //                 <span>12/00/18</span>
      //                 <span> - </span>
      //                 <span>12/00/20</span>
      //               </p>
      //               <p className="description d-none d-sm-block">
      //                 Cinquanta cançons en un disc quàdruple, un llibre amb
      //                 textos personals i un centenar de fotografies per
      //                 commemorar mig segle als escenaris.
      //               </p>
      //             </div>
      //             <div className="section-event-button">
      //               <button>comprar</button>
      //             </div>
      //           </div>
      //         </div>
      //         <div className="col-12 col-md-6 mb-4">
      //           <div className="section-event">
      //             <div className="section-event-header p-3">
      //               <p className="mb-1">JOAN MANEL SERRAT</p>
      //               <p>Antología desordenada</p>
      //             </div>
      //             <div className="section-event-image">
      //               <img
      //                 className="img-fluid"
      //                 src="../../images/sample-image.jpg"
      //                 alt="event-image"
      //               />
      //             </div>
      //             <div className="section-event-info p-3">
      //               <p className="dates mb-1">
      //                 <span>12/00/18</span>
      //                 <span> - </span>
      //                 <span>12/00/20</span>
      //               </p>
      //               <p className="description d-none d-sm-block">
      //                 Cinquanta cançons en un disc quàdruple, un llibre amb
      //                 textos personals i un centenar de fotografies per
      //                 commemorar mig segle als escenaris.
      //               </p>
      //             </div>
      //             <div className="section-event-button">
      //               <button>comprar</button>
      //             </div>
      //           </div>
      //         </div>
      //         <div className="col-12 col-md-6 mb-4">
      //           <div className="section-event">
      //             <div className="section-event-header p-3">
      //               <p className="mb-1">JOAN MANEL SERRAT</p>
      //               <p>Antología desordenada</p>
      //             </div>
      //             <div className="section-event-image">
      //               <img
      //                 className="img-fluid"
      //                 src="../../images/sample-image.jpg"
      //                 alt="event-image"
      //               />
      //             </div>
      //             <div className="section-event-info p-3">
      //               <p className="dates mb-1">
      //                 <span>12/00/18</span>
      //                 <span> - </span>
      //                 <span>12/00/20</span>
      //               </p>
      //               <p className="description d-none d-sm-block">
      //                 Cinquanta cançons en un disc quàdruple, un llibre amb
      //                 textos personals i un centenar de fotografies per
      //                 commemorar mig segle als escenaris.
      //               </p>
      //             </div>
      //             <div className="section-event-button">
      //               <button>comprar</button>
      //             </div>
      //           </div>
      //         </div>
      //         <div className="col-12 col-md-6 mb-4">
      //           <div className="section-event">
      //             <div className="section-event-header p-3">
      //               <p className="mb-1">JOAN MANEL SERRAT</p>
      //               <p>Antología desordenada</p>
      //             </div>
      //             <div className="section-event-image">
      //               <img
      //                 className="img-fluid"
      //                 src="../../images/sample-image.jpg"
      //                 alt="event-image"
      //               />
      //             </div>
      //             <div className="section-event-info p-3">
      //               <p className="dates mb-1">
      //                 <span>12/00/18</span>
      //                 <span> - </span>
      //                 <span>12/00/20</span>
      //               </p>
      //               <p className="description d-none d-sm-block">
      //                 Cinquanta cançons en un disc quàdruple, un llibre amb
      //                 textos personals i un centenar de fotografies per
      //                 commemorar mig segle als escenaris.
      //               </p>
      //             </div>
      //             <div className="section-event-button">
      //               <button>comprar</button>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </section>

      //     <section className="container">
      //       <div className="row mb-3 nav-return">
      //         <div className="col-12">
      //           <p className="text-right">
      //             <a href="#">Volver</a>
      //           </p>
      //         </div>
      //       </div>
      //     </section>

          // <section className="container">
          //   <div className="row">
          //     <div className="col-12 col-md-6">
          //       <div className="section-sessions-selector p-3">
          //         <div className="section-session-selector mb-2 mt-2">
          //           <div className="row">
          //             <div className="col">
          //               <span>Fecha:</span>
          //               <span>20/20/1018, </span>
          //               <span>Disponibilidad:</span>
          //               <span>10</span>
          //             </div>
          //             <div className="col-sm-auto">
          //               <i className="icon-control">+</i>
          //               <span>0</span>
          //               <i className="icon-control">-</i>
          //             </div>
          //           </div>
          //         </div>
          //         <div className="section-session-selector mb-2 mt-2">
          //           <div className="row">
          //             <div className="col">
          //               <span>Fecha:</span>
          //               <span>20/20/1018, </span>
          //               <span>Disponibilidad:</span>
          //               <span>10</span>
          //             </div>
          //             <div className="col-sm-auto">
          //               <i className="icon-control">+</i>
          //               <span>0</span>
          //               <i className="icon-control">-</i>
          //             </div>
          //           </div>
          //         </div>
          //         <div className="section-session-selector mb-2 mt-2">
          //           <div className="row">
          //             <div className="col">
          //               <span>Fecha:</span>
          //               <span>20/20/1018, </span>
          //               <span>Disponibilidad:</span>
          //               <span>10</span>
          //             </div>
          //             <div className="col-sm-auto">
          //               <i className="icon-control">+</i>
          //               <span>0</span>
          //               <i className="icon-control">-</i>
          //             </div>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //     <div className="col-12 col-md-6">
          //       <div className="section-shopping-cart p-3">
          //         <div className="section-shopping-cart-item">
          //           <div className="row align-items-center">
          //             <div className="col-12 pb-2">
          //               <p className="text-dark">PABLO ALBORÁN</p>
          //             </div>
          //           </div>
          //           <div className="row align-items-center pt-1 pb-1">
          //             <div className="col">
          //               <span>10/12/2018</span>
          //             </div>
          //             <div className="col-sm-auto">
          //               <span>x3</span>
          //             </div>
          //             <div className="col-sm-auto">
          //               <img
          //                 className="img-fluid mx-auto d-block"
          //                 src="../../images/trash.png"
          //                 alt="delete-icon"
          //               />
          //             </div>
          //           </div>
          //           <div className="row align-items-center pt-1 pb-1">
          //             <div className="col">
          //               <span>10/12/2018</span>
          //             </div>
          //             <div className="col-sm-auto">
          //               <span>x3</span>
          //             </div>
          //             <div className="col-sm-auto">
          //               <img
          //                 className="img-fluid mx-auto d-block"
          //                 src="../../images/trash.png"
          //                 alt="delete-icon"
          //               />
          //             </div>
          //           </div>
          //         </div>
          //         <div className="section-shopping-cart-item">
          //           <div className="row align-items-center">
          //             <div className="col-12 pb-2">
          //               <p className="text-dark">PABLO ALBORÁN</p>
          //             </div>
          //           </div>
          //           <div className="row align-items-center pt-1 pb-1">
          //             <div className="col">
          //               <span>10/12/2018</span>
          //             </div>
          //             <div className="col-sm-auto">
          //               <span>x3</span>
          //             </div>
          //             <div className="col-sm-auto">
          //               <img
          //                 className="img-fluid mx-auto d-block"
          //                 src="../../images/trash.png"
          //                 alt="delete-icon"
          //               />
          //             </div>
          //           </div>
          //           <div className="row align-items-center pt-1 pb-1">
          //             <div className="col">
          //               <span>10/12/2018</span>
          //             </div>
          //             <div className="col-sm-auto">
          //               <span>x3</span>
          //             </div>
          //             <div className="col-sm-auto">
          //               <img
          //                 className="img-fluid mx-auto d-block"
          //                 src="../../images/trash.png"
          //                 alt="delete-icon"
          //               />
          //             </div>
          //           </div>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // </section>



      //   </div>
      // </div>
    )
  }
}

export default App
