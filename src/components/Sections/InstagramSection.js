import React from 'react'
import shortid from 'shortid'
import InstagramPhoto from '../DisplayItems/InstagramPhoto'

const InstagramSection = ({ instagramUsername, photos }) => {
  if (instagramUsername || photos.length > 0) {
    return (
      <section className="container-fluid text-center default-section">
        <div className="container">

          <div className="row section-title">
            <div className="col-md-12">
              <h2>Check out our Instagram</h2>
              {instagramUsername && (
                <p className="lead">
                  <a href={`https://instagram.com/${instagramUsername}`}>
                    <strong>
                      @
                      {' '}
                      {instagramUsername}
                    </strong>
                  </a>
                </p>
              )}
            </div>
            {photos.map(photo => <InstagramPhoto key={shortid.generate()} id={photo.id} />)}
          </div>

        </div>
      </section>
    )
  }
  return null
}

export default InstagramSection
