import React from 'react'
import Link from 'gatsby-link'
import Image from '../Image'

const ServiceCard = ({ title, body, url, img }) => (
  <div className="col-md-4">
    <div className="card service-card">
      <a href={url}>
        <Image image={img} alt="" className="img-service-card" />
      </a>
      <div className="card-body">
        <h3>{title}</h3>
        <p>
          {body}
        </p>
        <Link to={url} className="card-link">
          See Details
          {' '}
          <i className="fas fa-angle-right" />
        </Link>
      </div>
    </div>
  </div>
)

export default ServiceCard
