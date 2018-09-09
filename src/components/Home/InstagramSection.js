import React from 'react'
import shortid from 'shortid'
import InstagramPhoto from '../DisplayItems/InstagramPhoto'

const InstagramSection = ({ title, body, services }) => (
  <section className="container-fluid text-center default-section">
    <div className="container">

      <div className="row section-title">
        <div className="col-md-12">
          <h2>Instagram activity</h2>
          <p className="lead">
            <a href="https://instagram.com">
              <strong>@clockbeats_brescia</strong>
            </a>
          </p>
        </div>
        <InstagramPhoto
          id="Bnfx_VLgtvz"
        />
        <InstagramPhoto
          id="BnDvy84AlLJ"
        />
        <InstagramPhoto
          id="BmthdSmgbvV"
        />
        <InstagramPhoto
          id="BmsanEtgfCf"
        />
      </div>

    </div>
  </section>
)

export default InstagramSection
