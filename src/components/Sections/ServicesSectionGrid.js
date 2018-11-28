import React from 'react'
import Link from 'gatsby-link'
import shortid from 'shortid'

const ServicesSection = ({ title, body, services }) => (
  <section className="full-wrapper text-center default-section">
    <div className="container">

      <div className="row section-title">
        <div className="col-md-12">
          <h2>{title}</h2>
          <p className="lead">{body}</p>
        </div>
      </div>

      <div className="grid-wrapper">
        {services.map(service => (
          <Link key={shortid.generate()} to={service.url} className="grid-cell" style={{ backgroundImage: `url('${service.img.childImageSharp.fluid.src}')` }}>
            <div className="overlay-cell">
              <h3>{service.title}</h3>
              {/* <p className="short">{service.body}</p> */}
              <p className="cta brand-text">
                <strong>Show More </strong>
                <i className="fas fa-angle-right" />
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="row cta-section">
        <div className="col">
          <Link to="/services" className="btn btn-primary btn-lg shadow">
            See all Services
          </Link>
        </div>
      </div>

    </div>
  </section>

)

export default ServicesSection
