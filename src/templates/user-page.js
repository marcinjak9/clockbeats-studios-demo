import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'
import UserTemplate from './Wrappers/UserTemplate'
import Layout from '../layouts'

const UserPage = (props) => {
  const {
    data: {
      markdownRemark: {
        html,
        frontmatter: {
          title, body, image, userRole, avatar, tag, newsTitle, instagram, instagramPhotos, socials, seoSection,
        },
      },
    },
  } = props
  return (
    <Layout>
      {seoSection && (
        <Helmet>
          {seoSection.seoTitle && <title>{seoSection.seoTitle}</title>}
          {seoSection.seoDescription && <meta name="description" content={seoSection.seoDescription} />}
          {seoSection.ogTitle && <meta property="og:title" content={seoSection.ogTitle} />}
          {seoSection.ogUrl && <meta property="og:url" content={seoSection.ogUrl} />}
          {seoSection.ogImage && <meta property="og:image" content={seoSection.ogImage} />}
        </Helmet>
      )}
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
        contentComponent={HTMLContent}
        content={html}
      />
    </Layout>
  )
}
UserPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      id: PropTypes.string,
      html: PropTypes.string,
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
        seoSection {
          seoTitle
          seoKeywords
          ogTitle
          ogImage
          ogUrl
          seoDescription
        }
        title
        body: userBody
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
