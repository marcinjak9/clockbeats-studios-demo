import React from 'react'
import PropTypes from 'prop-types'

const ServiceCard = ({ title, body, url, img }) => (
  <div className="col-md-4">
    <div className="card service-card">
      <a href="/">
        <img src={img} alt="" />
      </a>
      <div className="card-body">
        <h3>{title}</h3>
        <p>
          {body}
        </p>
        <a href={url} className="card-link">
          See Details
          {' '}
          <i className="fas fa-angle-right" />
        </a>
      </div>
    </div>
  </div>
)

export default ServiceCard
