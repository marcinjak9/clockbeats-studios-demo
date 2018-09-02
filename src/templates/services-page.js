import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const ServicesTemplate = (props) => {
  return (
    <div>
      <div className="section orange-bg">
        <div className="container is-fluid">
          <div className="column is-one-third">
            <div className="title  white-text">Lorem Ipsum dolor sit amet et eniqua res</div>
            <div className="subtitle  white-text"><br></br>Quousque tandem abutere, catilina, patientia nostra?
            Nos habemus in dolore magno resistere, sed etiam tibi divisores mater non concupiscit.
            Mala tempora currunt, fuisse cum caesar debit!  </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="container is-fluid has-text-centered">
          <p className="subtitle is-6 is-spaced grey-text">SERVICES</p>
          <div className="title primary-text">General Description Section</div>
          <p>Lorem ipsum dolor sit amet consecutur adipiscit elit, consecutur qua numus adibimus.</p>
          <div className="columns three-box">
            <div className="column">
              <h3 className="title is-3">col 1</h3>
              <p className="subtitle-is-6">Lorem ipsum dolor sit amet et eniqua res in castra siatdolor sit amet et eniqua res in castra siat, concupiscit abem siat queusque tandem abutere</p>
              <h3 className="title is-5">Read more about</h3>
            </div>
            <div className="column">
              <h3 className="title is-3">col 1</h3>
              <p className="subtitle-is-6">Lorem ipsum dolor sit amet et eniqua res in castra siatdolor sit amet et eniqua res in castra siat, concupiscit abem siat queusque tandem abutere</p>
              <h3 className="title is-5">Read more about</h3>
            </div>
            <div className="column">
              <h3 className="title is-3">col 1</h3>
              <p className="subtitle-is-6">Lorem ipsum dolor sit amet et eniqua res in castra siatdolor sit amet et eniqua res in castra siat, concupiscit abem siat queusque tandem abutere</p>
              <h3 className="title is-5">Read more about</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="section grey-bg">
        <div className="container is-fluid has-text-centered">
          <div className="title primary-text">Services</div>
        </div>
      </div>

      <div className="section">
        <div className="container is-fluid has-text-centered">
          <div className="title primary-text">Learn More About Clockbeats!</div>
          <div className="subtitle">Lorem ipsum dolor sit amet consecutur adipiscit elit, consecutur qua numus adibimus.</div>
          <div className="columns">
            <div className="column">
              <div className="box a-box"></div>
              <div className="box a-box"></div>
            </div>
            <div className="column">
              <div className="box b-box"></div>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </div>
    </div>


  )
}

ServicesTemplate.propTypes = {
}

const Services = (props) => {
  return (
    <ServicesTemplate
      {...props}
    // contentComponent={HTMLContent}
    // title={post.frontmatter.title}
    // content={post.html}
    />
  )
}

Services.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Services
