import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Image from '../Image'

const UserCard = ({
  avatar, name, userRole, bio, url, instagram, spotify, soundcloud }) => (
    <div className="col-md-3 card-wrapper">
      <div className="card user-card">
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <Image image={avatar} alt="" className="avatar shadow animated-background" />
            <header>
              <p>{name}</p>
              <i>{userRole}</i>
            </header>
            <p>{bio}</p>
          </div>
          <Link to={url} className="card-link">
            See Profile
            {' '}
            <i className="fas fa-angle-right" />
          </Link>
        </div>
        <div className="social-icons">
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
          )}
          {spotify && (
            <a href={spotify} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-spotify" />
            </a>
          )}
          {soundcloud && (
            <a href={soundcloud} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-soundcloud" />
            </a>
          )}
        </div>
      </div>

    </div>
)

UserCard.propTypes = {
  name: PropTypes.string,
  userRole: PropTypes.string,
  bio: PropTypes.string,
  url: PropTypes.string,
  instagram: PropTypes.string,
  spotify: PropTypes.string,
  soundcloud: PropTypes.string,
}

export default UserCard
