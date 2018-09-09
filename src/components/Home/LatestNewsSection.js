import React from 'react'
import shortid from 'shortid'
import PostCard from '../DisplayItems/PostCard'

const LatestNewsSection = ({ title, body, posts }) => (
  <section className="full-wrapper text-center default-section">
    <div className="container">

      <div className="row section-title">
        <div className="col-md-12">
          <h2>{title}</h2>
        </div>
        {posts.map(post => (
          <PostCard
            key={shortid.generate()}
          />
        ))}
      </div>

      <div className="row cta-section">
        <div className="col">
          <a href="https://blog.clockbeats.com" className="btn btn-primary btn-lg shadow">
            Take a look on our Blog
          </a>
        </div>
      </div>

    </div>
  </section>

)

export default LatestNewsSection
