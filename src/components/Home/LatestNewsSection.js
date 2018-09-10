import React, { Component } from 'react'
import PropTypes from 'prop-types'
import shortid from 'shortid'
import PostCard from '../DisplayItems/PostCard'

class LatestNewsSection extends Component {
  state = {
    posts: [],
    error: false,
  }

  componentDidMount() {
    // GHOST API CALL
    const scriptjs = require('scriptjs') // eslint-disable-line
    const { tag } = this.props
    // if (tag) {
    scriptjs('https://blog.clockbeats.com/public/ghost-sdk.min.js', (e) => {
      window.ghost.init({
        clientId: 'ghost-frontend',
        clientSecret: 'a18255337cf8',
      })
      fetch(window.ghost.url.api('posts', { filter: `tags:[${tag}]`, include: 'authors,tags', limit: 3 }))
        .then((response) => {
          if (response.status !== 200) {
            this.setState({ error: true })
            return;
          }
          response.json().then((data) => {
            const newPosts = []
            data.posts.map((post) => {
              const obj = {
                title: post.title,
                image: `https://blog.clockbeats.com${post.feature_image}`,
                url: `https://blog.clockbeats.com${post.url}`,
                tag: post.tags[0] ? post.tags[0].name : '',
                body: post.meta_description,
                author: {
                  name: post.authors[0].name,
                  bio: post.authors[0].bio,
                  avatar: `https://blog.clockbeats.com${post.authors[0].profile_image}`,
                  authorUrl: `https://blog.clockbeats.com/author/${post.authors[0].slug}`,
                },
              }
              newPosts.push(obj)
            })

            this.setState({ posts: newPosts })
          });
        })
        .catch((err) => {
          this.setState({ error: true })
        });
    })
    // }
  }


  render() {
    const { title } = this.props
    const { posts, error } = this.state
    if (error) {
      return null
    }
    return (
      <section className="full-wrapper text-center default-section">
        <div className="container">

          <div className="row section-title">
            <div className="col-md-12">
              <h2>{title}</h2>
            </div>
            {posts.map(post => (
              <PostCard
                key={shortid.generate()}
                {...post}
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
  }
}

LatestNewsSection.propTypes = {
  title: PropTypes.string,
  tag: PropTypes.string,
}

export default LatestNewsSection
