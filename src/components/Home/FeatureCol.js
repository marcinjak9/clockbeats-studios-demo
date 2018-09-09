import React from 'react'
import PropTypes from 'prop-types'

const FeatureCol = ({ image, title, body, url, cta }) => (
  <div className="column">
    <figure class="image is-128x128 center-margin">
      <img class="is-rounded" src={image} />
    </figure>
    <h3 className="title is-4">{title}</h3>
    <p className="subtitle-is-6">{body}</p>
    <Link to={url}>{cta}</Link>
  </div>
)

FeatureCol.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  url: PropTypes.string,
  cta: PropTypes.string,
}

export default FeatureCol