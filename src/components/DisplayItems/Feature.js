import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const HomeFeatures = ({ img, title, body, cta, url }) => (
  <div className="col-md-4 feature-column">
    <img src={img} alt="" className="feature-icon" />
    <h5>{title}</h5>
    <p>{body}</p>
    <Link to={url}>{cta}</Link>
  </div>
)

HomeFeatures.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
}

export default HomeFeatures
