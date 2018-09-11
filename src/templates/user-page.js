import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import UserTemplate from './Wrappers/UserTemplate'

const UserPage = (props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: {
          title, body, image, userRole, avatar, tag, newsTitle, instagram, instagramPhotos, socials,
        },
      },
    },
  } = props
  return (
    <UserTemplate
      name={title}
      body={body}
      image={image}
      userRole={userRole}
      avatar={avatar}
      tag={tag}
      newsTitle={newsTitle}
      instagram={instagram}
      instagramPhotos={instagramPhotos}
      socials={socials}
    // contentComponent={HTMLContent}
    // content={post.html}
    />
  )
}
UserPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string,
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        body: PropTypes.string,
        image: PropTypes.string,
        userRole: PropTypes.string,
        avatar: PropTypes.string,
        tag: PropTypes.string,
        newsTitle: PropTypes.string,
        instagram: PropTypes.shape({
          user: PropTypes.string,
        }),
        instagramPhotos: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string,
        })),
      }),
    }),
  }),
}

export default UserPage

export const userQuery = graphql`
  query UserById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        body
        image
        userRole
        avatar
        tag
        newsTitle
        instagram {
          user
        }
        instagramPhotos {
          id
        }
        socials {
          instagram
          facebook
          soundcloud
          spotify
        }
      }
    }
  }
`
