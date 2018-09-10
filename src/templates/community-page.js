import React from 'react'
import PropTypes from 'prop-types'
import image from '../img/acoustic-guitar.svg'
import CommunityTemplate from './Wrappers/CommunityPageTemplate'

const Community = (props) => {
  const {
    data: {
      community: {
        frontmatter: {
          title, heroSection, featuresTitle, featuresList, team, latestNews, instagram, instagramPhotos,
        },
      },
      users,
    },
  } = props
  const teamList = users.edges.map(({ node: { id, frontmatter, fields: { slug } } }) => ({
    id,
    title: frontmatter.name,
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
  )
}

Community.propTypes = {
  data: PropTypes.shape({
    community: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        heroSection: PropTypes.shape({
          image: PropTypes.string,
          payoff: PropTypes.string,
        }),
        featuresTitle: PropTypes.string,
        featuresList: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string,
          cta: PropTypes.string,
          url: PropTypes.string,
          img: PropTypes.string,
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
          name: PropTypes.string,
          body: PropTypes.string,
          userRole: PropTypes.string,
          avatar: PropTypes.string,
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
        heroSection {
          image
          payoff
        }
        featuresTitle
        featuresList {
          title
          body
          cta
          url
          img
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
            name
            body
            userRole
            avatar
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
