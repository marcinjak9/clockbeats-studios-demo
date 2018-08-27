import React from 'react'
import Card from '../general/Card'
const HomePageHero = ({ title, payoff, backgroundImage, dropdownOptions }) => (
  <div>
    <section className="hero is-medium home-section" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="is-overlay dark-overlay"></div>
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="title is-1 text-white">
                {title}
              </h1>
              <h2 className="subtitle text-white">
                {payoff}
              </h2>
            </div>

            <div className="column">

              <Card>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input is-medium" type="text" placeholder="Your email" />
                  </div>
                </div>


                <div className="field">
                  <label className="label">Service to cover</label>
                  <div className="control">
                    <div className="select is-medium is-fullwidth">
                      <select>
                        <option disabled>Select dropdown</option>
                        {dropdownOptions && dropdownOptions.map((serviceCta, i) => (
                          <option key={serviceCta.HeroCtaServicesItem}>{serviceCta.HeroCtaServicesItem}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>


                <div className="field">
                  <div className="control is-fullwidth">
                    <button className="button is-link is-medium is-fullwidth">Submit</button>
                  </div>
                </div>
                <div className="field">
                  <div className="control is-fullwidth">
                    <button className="button is-light is-medium is-fullwidth">Open chat</button>
                  </div>
                </div>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default HomePageHero