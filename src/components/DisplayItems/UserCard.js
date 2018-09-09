import React from 'react'
import PropTypes from 'prop-types'

const UserCard = ({ name, userRole, bio, url, instagram, spotify, soundcloud }) => (
  <div className="col-md-3 card-wrapper">
    <div className="card user-card">
      <div className="card-body">
        <img src="http://i.pravatar.cc/300" alt="" className="avatar shadow" />
        <header>
          <p>{name}</p>
          <i>{userRole}</i>
        </header>
        <p>{bio}</p>
        <a href={url} className="card-link">
          See Profile

          {' '}
          <i className="fas fa-angle-right" />
        </a>
      </div>
    </div>
    <div className="social-icons">
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram" />
      </a>
      <a href={spotify} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-spotify" />
      </a>
      <a href={soundcloud} target="_blank" rel="noopener noreferrer">
        <i className="fab fa-soundcloud" />
      </a>
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
