import React from 'react'
import shortid from 'shortid'
import ServiceCard from '../DisplayItems/ServiceCard'

const ServicesSection = ({ title, body, services }) => (
  <section className="full-wrapper text-center default-section">
    <div className="container">

      <div className="row section-title">
        <div className="col-md-12">
          <h2>{title}</h2>
          <p className="lead">{body}</p>
        </div>
      </div>

      <div className="row">
        {services.map(service => (
          <ServiceCard
            key={shortid.generate()}
            title={service.title}
            body={service.body}
            url={service.url}
            img={service.img}
          />
        ))}
      </div>

    </div>
  </section>

)

export default ServicesSection
