import React from 'react'
import { third3 } from "../data/third3";

function Steps() {
  return (
    <section className="counter">
        <div className="container">
          {third3.map((item, key) => (
            <div className="col-md-3 col-sm-3" key={key}>
              <div className="counter-text">
                <span aria-hidden="true" className={item.icon}></span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Steps