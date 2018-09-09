import React from 'react'
import PropTypes from 'prop-types'
import Feature from '../DisplayItems/Feature'

const HomeFeatures = props => (
  <section className="container d-flex flex-column justify-content-center text-center features-section">
    <h2>An infrastructure experience development teams love with the features your business needs</h2>
    <div className="row">
      {[1, 2, 3].map(item => (
        <Feature
          key={item}
          title="Build better apps faster"
          body="From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help teams spend more time building better software for your customers."
          cta="Learn more about our products"
          url="/"
          img="https://placehold.it/64x64"
        />
      ))}

    </div>
  </section>
)

HomeFeatures.propTypes = {

}

export default HomeFeatures
