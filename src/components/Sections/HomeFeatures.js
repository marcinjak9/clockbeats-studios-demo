import React from 'react'
import PropTypes from 'prop-types'
import Feature from '../DisplayItems/Feature'

const HomeFeatures = ({ title, features }) => (
  <section className="container default-section d-flex flex-column justify-content-center text-center features-section">
    <h2>{title}</h2>
    <div className="row">
      {features.map(feature => (
        <Feature
          key={feature.id}
          title={feature.title}
          body={feature.body}
          cta={feature.cta}
          url={feature.url}
          img={feature.img}
        />
      ))}

    </div>
  </section>
)

HomeFeatures.propTypes = {
  title: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    cta: PropTypes.string,
    url: PropTypes.string,
    img: PropTypes.string,
  })),
}

export default HomeFeatures
