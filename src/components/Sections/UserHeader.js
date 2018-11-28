import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Image, { getImageLink } from '../Image'

const UserHeader = (props) => {
  const {
    title, payoff, backgroundImage, userRole, avatar, socials,
  } = props
  return (
    <section
      className="container-fluid user-header d-flex flex-column justify-content-center"
      style={{ backgroundImage: `url('${getImageLink(backgroundImage)}')` }}
    >
      <div className="hero-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center">
            <Image image={avatar} alt="" className="img-fluid avatar" />
          </div>
          <div className="col-md-7 text-col">
            <h1 className="text-white title">{title}</h1>
            <h3 className="text-white">{userRole}</h3>
            <p className="lead text-white">
              {payoff}
            </p>
            <div className="profile-socials">
              {socials.instagram
                && (
                  <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                )
              }
              {socials.facebook
                && (
                  <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                )
              }
              {socials.spotify
                && (
                  <a href={socials.spotify} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faSpotify} />
                  </a>
                )
              }
              {socials.soundcloud
                && (
                  <a href={socials.soundcloud} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserHeader
