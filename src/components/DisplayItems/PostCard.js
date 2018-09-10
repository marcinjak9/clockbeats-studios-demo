import React from 'react'
import PropTypes from 'prop-types'

const PostCard = ({ tag, title, body, author, url, image }) => (
  <div className="col-md-4">
    <div className="card blog-card">
      <a href="/">
        <img src={image} alt="" />
      </a>
      <div className="card-body">
        <small>{tag}</small>
        <h3>{title}</h3>
        <p>
          {body}
        </p>
        <p className="text-left author-title"><small>About the author</small></p>
        {author

          && (
            <a className="author-container" href={author.authorUrl}>
              <img src={author.avatar} alt="" className="shadow" />
              <div className="inner-author">
                <p className="name">{author.name}</p>
                <p>{author.bio}</p>
              </div>
              <i className="fas fa-angle-right" />
            </a>
          )
        }
        <a href={url} className="card-link">
          Read full
          {' '}
          <i className="fas fa-angle-right" />
        </a>

      </div>
    </div>
  </div>
)

PostCard.propTypes = {
  title: PropTypes.string,
  tag: PropTypes.string,
  body: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    bio: PropTypes.string,
    avatar: PropTypes.string,
    authorUrl: PropTypes.string,
  }),
  url: PropTypes.string,
  image: PropTypes.string,
}

export default PostCard
