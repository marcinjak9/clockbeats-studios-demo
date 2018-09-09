import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons'

const UserHeader = (props) => {
  const {
    title, payoff, backgroundImage,
  } = props
  return (
    <section className="container-fluid user-header d-flex flex-column justify-content-center" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="hero-overlay" />
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center">
            <img src="http://i.pravatar.cc/300" alt="" className="img-fluid avatar" />
          </div>
          <div className="col-md-7 text-col">
            <h1 className="text-white title">{title}</h1>
            <h3 className="text-white">Senior Producer</h3>
            <p className="lead text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas adipisci quod voluptatem amet fugit assumenda ipsa dolore iusto repellendus nesciunt deserunt a saepe doloribus, aut est harum
            </p>
            <div className="profile-socials">
              <a href="/" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/" target="_blank">
                <FontAwesomeIcon icon={faSpotify} />
              </a>
              <a href="/" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserHeader
