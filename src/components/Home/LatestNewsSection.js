import React from 'react'
import shortid from 'shortid'

const LatestNewsSection = ({ title, body, posts }) => (
  <section className="full-wrapper text-center default-section">
    <div className="container">

      <div className="row section-title">
        <div className="col-md-12">
          <h2>{title}</h2>
        </div>
        {posts.map(post => (
          <div className="col-md-4">
            <div className="card blog-card">
              <a href="/">
                <img src="https://source.unsplash.com/collection/2068121/800x800" alt="" />
              </a>
              <div className="card-body">
                <small>Featured</small>
                <h3>Post title</h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis error laudantium, saepe nihil officiis omnis beatae impedit asperiores minima doloribus ratione
                </p>
                <p className="text-left author-title"><small>About the author</small></p>
                <a className="author-container" href="/">
                  <img src="http://i.pravatar.cc/80" alt="" className="shadow" />
                  <div className="inner-author">
                    <p className="name">Jon Doe</p>
                    <p>Smart bio about our best producer</p>
                  </div>
                  <i className="fas fa-angle-right" />
                </a>
                <a href="/" className="card-link">
                  Read full
                  {' '}
                  <i className="fas fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>

)

export default LatestNewsSection
