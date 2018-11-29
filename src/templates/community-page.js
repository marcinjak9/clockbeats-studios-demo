import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import CommunityTemplate from './Wrappers/CommunityPageTemplate'
import Layout from '../layouts'

const Community = (props) => {
  const {
    data: {
      community: {
        frontmatter: {
          title, heroSection, featuresTitle, featuresList, team,
          latestNews, instagram, instagramPhotos, seoSection,
        },
      },
      users,
    },
  } = props
  const teamList = users.edges.map(({ node: { id, frontmatter, fields: { slug } } }) => ({
    id,
    title: frontmatter.title,
    avatar: frontmatter.avatar,
    link: slug,
    profession: frontmatter.userRole,
    bio: frontmatter.body,
    instagram: frontmatter.socials.instagram,
    facebook: frontmatter.socials.facebook,
    soundcloud: frontmatter.socials.soundcloud,
    spotify: frontmatter.socials.spotify,
  }))
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
      <CommunityTemplate
        hero={{
          title,
          payoff: heroSection.payoff,
          image: heroSection.image,
        }}
        featuresTitle={featuresTitle}
        featuresList={featuresList}
        teamSection={{
          title: team.title,
          body: team.body,
          list: teamList,
        }}
        latestNews={{
          title: latestNews.title,
          tag: latestNews.tag,
        }}
        instagram={{
          user: instagram.user,
          photos: instagramPhotos,
        }}
      // contentComponent={HTMLContent}
      // title={post.frontmatter.title}
      // content={post.html}
      />
    </Layout>
  )
}

Community.propTypes = {
  data: PropTypes.shape({
    community: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        heroSection: PropTypes.shape({
          image: PropTypes.any,
          payoff: PropTypes.string,
        }),
        featuresTitle: PropTypes.string,
        featuresList: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string,
          cta: PropTypes.string,
          url: PropTypes.string,
          img: PropTypes.any,
        })),
        team: PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string,
        }),
        latestNews: PropTypes.shape({
          title: PropTypes.string,
          tag: PropTypes.string,
        }),
        instagram: PropTypes.shape({
          user: PropTypes.string,
        }),
        instagramPhotos: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string,
        })),
      }),
    }),

    users: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        fields: PropTypes.shape({
          slug: PropTypes.string,
        }),
        frontmatter: PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string,
          userRole: PropTypes.string,
          avatar: PropTypes.any,
          socials: PropTypes.shape({
            instagram: PropTypes.string,
            facebook: PropTypes.string,
            soundcloud: PropTypes.string,
            spotify: PropTypes.string,
          }),
        }),
      })),
    }),
  }),
}

export default Community

export const communityQuery = graphql`
  query CommunityQuery {
    community: markdownRemark(frontmatter: {templateKey: {eq: "community-page"}}) {
      frontmatter {
        title
        seoSection {
          seoTitle
          seoKeywords
          ogTitle
          ogImage {
            id
          }
          ogUrl
          seoDescription
        }
        heroSection {
          image {
            childImageSharp {
              fluid(maxWidth: 2880) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          payoff
        }
        featuresTitle
        featuresList {
          title
          body
          cta
          url
          img {
            childImageSharp {
              fluid(maxWidth: 220) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        team {
          title
          body
        }
        latestNews {
          title
          tag
        }
        instagram {
          user
        }
        instagramPhotos {
          id
        }
      }
    }
    users: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "user-page"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            body: userBody
            userRole
            avatar {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
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
    }
  }
`
