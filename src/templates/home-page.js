import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import HomePageTemplate from './Wrappers/HomePageTemplate'
import Layout from '../layouts'

const HomePage = (props) => {
  const {
    data: {
      home: {
        frontmatter: {
          title, heroSection, featuresTitle, featuresList, descriptionImage, descriptionImageLinks,
          team, services, latestNews, formCta, instagram, instagramPhotos, seoSection,
        },
      },
      users, servicesList, config,
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
  const servicesRef = servicesList.edges.map(({ node: { id, frontmatter, fields: { slug } } }) => ({
    id,
    img: frontmatter.heroSection.image,
    url: slug,
    body: frontmatter.heroSection.payoff,
    title: frontmatter.title,
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
      <HomePageTemplate
        hero={{
          title,
          payoff: heroSection.payoff,
          image: heroSection.image,
          ctaServices: heroSection.services,
          formTitle: heroSection.formTitle,
        }}
        features={{
          title: featuresTitle,
          list: featuresList,
        }}
        descriptionImage={{
          title: descriptionImage.title,
          body: descriptionImage.body,
          image: descriptionImage.image,
          links: descriptionImageLinks,
        }}
        team={{
          title: team.title,
          body: team.body,
          list: teamList,
        }}
        services={{
          title: services.title,
          body: services.body,
          list: servicesRef,
        }}
        latestNews={{
          title: latestNews.title,
          tag: latestNews.tag,
        }}
        formCta={{
          title: formCta.title,
          image: formCta.image,
          formTitle: formCta.formTitle,
        }}
        instagram={{
          user: instagram.user,
          photos: instagramPhotos,
        }}
        config={{
          branch: config.backend.branch,
        }}
      />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    home: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        heroSection: PropTypes.shape({
          image: PropTypes.any,
          payoff: PropTypes.string,
          formTitle: PropTypes.string,
          services: PropTypes.arrayOf(PropTypes.shape({
            HeroCtaServicesItem: PropTypes.string,
          })),
        }),
        featuresTitle: PropTypes.string,
        featuresList: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string,
          cta: PropTypes.string,
          url: PropTypes.string,
          img: PropTypes.any,
        })),
        descriptionImage: PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string,
          image: PropTypes.any,
        }),
        descriptionImageLinks: PropTypes.arrayOf(PropTypes.shape({
          text: PropTypes.string,
          url: PropTypes.string,
        })),
        team: PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string,
        }),
        services: PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string,
        }),
        latestNews: PropTypes.shape({
          title: PropTypes.string,
          tag: PropTypes.string,
        }),
        formCta: PropTypes.shape({
          title: PropTypes.string,
          formTitle: PropTypes.string,
          image: PropTypes.any,
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
    servicesList: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        fields: PropTypes.shape({
          slug: PropTypes.string,
        }),
        frontmatter: PropTypes.shape({
          title: PropTypes.string,
          heroSection: PropTypes.shape({
            image: PropTypes.string,
            payoff: PropTypes.string,
          }),
        }),
      })),
    }),
    config: PropTypes.shape({
      backend: PropTypes.shape({
        branch: PropTypes.string,
      }),
    }),
  }),
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage {
    home: markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
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
          services {
            HeroCtaServicesItem
          }
          formTitle
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
        descriptionImage {
          title
          body
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        descriptionImageLinks {
          text
          url
        }
        team {
          title
          body
        }
        services {
          title
          body
        }
        latestNews {
          title
          tag
        }
        formCta {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          formTitle
        }
        formCtaLinks {
          text
          url
        }
        instagram {
          user
        }
        instagramPhotos {
          id
        }
      }
    }

    users: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "user-page"}}} limit: 4) {
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

    servicesList: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "single-service-page"}}}, limit: 5) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            heroSection {
              image {
                childImageSharp {
                  fluid(maxHeight: 800, quality: 70) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              payoff
            }
          }
        }
      }
    }

    config: adminYaml {
      id
      backend {
        branch
      }
    }
  }
  `
