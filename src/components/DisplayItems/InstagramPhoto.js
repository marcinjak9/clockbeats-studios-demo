import React from 'react'
import PropTypes from 'prop-types'

class InstagramPhoto extends React.Component {
  state = {
    error: false,
  }

  render() {
    const { id } = this.props
    const { error } = this.state
    const img = error ? 'https://via.placeholder.com/600x600?text=Error%20fetching%20image' : `https://instagram.com/p/${id}/media/?size=l`
    return (
      <div className="col-md-3 col-6 instagram-wrapper">
        <div className="thumbnail instagram-img-container animated-background">
          <a href={`https://instagram.com/p/${id}`} target="blank" className="instagram-link">
            <img src={img} onError={() => this.setState({ error: true })} className="instagram-img" alt="Lights" />
            {!error && (
              <div className="instagram-overlay">
                <i className="fas fa-heart" />
              </div>
            )}
          </a>
        </div>
      </div>
    )
  }
}

InstagramPhoto.propTypes = {
  id: PropTypes.string,
}

export default InstagramPhoto
