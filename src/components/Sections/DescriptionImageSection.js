import React from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import Image from '../Image'

const DescriptionImageSection = ({
  image, title, body, links, cardRight, bodyComponent }) => (
    <section className="container default-section">
      {cardRight
        ? (
          <div className="row">
            <div className="col-lg-8 no-padding">
              <Image image={image} className="img-fluid image-card animated-background" alt="" />
            </div>
            <div className="col-lg-4 card absolute-card card-right">
              {bodyComponent
                ? bodyComponent()
                : (
                  <div className="card-body d-flex flex-column justify-content-around">
                    <h2>{title}</h2>
                    {body && <p>{body}</p>}
                    <div>
                      {links.map(link => <a key={shortid.generate()} href={link.url} className="card-link">{link.text}</a>)}
                    </div>
                  </div>
                )
              }
            </div>
          </div>
        )
        : (
          <div className="row">
            <div className="col-lg-4 card absolute-card">
              <div className="card-body d-flex flex-column justify-content-around">
                <h2>{title}</h2>
                <p>{body}</p>
                <div>
                  {links.map(link => <a key={shortid.generate()} href={link.url} className="card-link">{link.name}</a>)}
                </div>
              </div>
            </div>

            <div className="col-lg-8 no-padding">
              <Image image={image} className="img-fluid image-card animated-background" alt="" />
            </div>
          </div>
        )
      }


    </section>
)

DescriptionImageSection.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  cardRight: PropTypes.bool,
  image: PropTypes.any,
  bodyComponent: PropTypes.func,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    url: PropTypes.string,
  })),
}

export default DescriptionImageSection
