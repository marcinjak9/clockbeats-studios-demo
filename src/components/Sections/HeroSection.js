import React from 'react'
import PropTypes from 'prop-types'
import HeroForm from './HeroForm'

const HeroSection = (props) => {
  const {
    title, payoff, backgroundImage, dropdownOptions, formTitle, showForm, formName,
  } = props
  if (!title) {
    return null
  }
  return (
    <section className="container-fluid hero d-flex flex-column justify-content-center" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="hero-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-7 text-col">
            <h1 className="text-white title">{title}</h1>
            {payoff
              && (
                <p className="lead text-white">
                  {payoff}
                </p>
              )
            }
          </div>
          {showForm && formTitle && (
            <div className="col-md-5">
              <HeroForm formName={formName} dropdownOptions={dropdownOptions} title={formTitle} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

HeroSection.propTypes = {
  title: PropTypes.string,
  payoff: PropTypes.string,
  backgroundImage: PropTypes.string,
  dropdownOptions: PropTypes.arrayOf(PropTypes.shape({
    HeroCtaServicesItem: PropTypes.string,
  })),
  formTitle: PropTypes.string,
  showForm: PropTypes.bool,
  formName: PropTypes.string,
}

export default HeroSection
