import React from 'react'
import { section2 } from "../data/section2";

function Resume() {
  return (
    <section className="features">
        <div className="container">
          {section2.map((item, key) => (
            <div className="col-md-4 col-sm-4" key={key}>
              <div className="features-content">
                <span className="box1">
                  <span aria-hidden="true" className={item.icon}></span>
                </span>
                <h3>{item.title}</h3>
                <p>
                    {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
  )
}

export default Resume