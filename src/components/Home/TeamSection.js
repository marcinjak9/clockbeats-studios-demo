import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import shortid from 'shortid'
import UserCard from '../DisplayItems/UserCard'

const TeamSection = ({ title, body, team, showCta }) => (
  <section className="full-wrapper text-center default-section">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>{title}</h2>
          <p className="lead">{body}</p>
        </div>
      </div>
    </div>
    <div className="container-fluid users-list-container">
      <div className="row">
        {[1, 1, 1, 1].map(user => (
          <UserCard
            key={shortid.generate()}
            name="Jon Doe"
            userRole="Sound Producer"
            bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cumque ipsa quasi dicta repellat consequuntur repellendus possimus praesentium est."
            url="/community/jon-doe"
            instagram="/"
            spotify="/"
            soundcloud="/"
          />
        ))}
      </div>

      {showCta
        && (
          <div className="row cta-section">
            <div className="col">
              <Link to="/community" className="btn btn-primary btn-lg shadow">
                See all Professionals and Artists
              </Link>
            </div>
          </div>
        )
      }

    </div>
  </section>
)

TeamSection.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  team: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    userRole: PropTypes.string,
    bio: PropTypes.string,
    url: PropTypes.string,
    instagram: PropTypes.string,
    spotify: PropTypes.string,
    soundcloud: PropTypes.string,
  })),
}

export default TeamSection
