import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import ServicesTemplate from './Wrappers/ServicesTemplate'
import Layout from '../layouts'

const Services = (props) => {
  const {
    data: {
      markdownRemark: {
        frontmatter: {
          title, heroSection, featuresTitle, featuresList, services, latestNews, instagram, instagramPhotos,
        },
      },
      servicesList,
    },
  } = props
  const servicesRef = servicesList.edges.map(({ node: { id, frontmatter, fields: { slug } } }) => ({
    id,
    img: frontmatter.heroSection.image,
    url: slug,
    body: frontmatter.heroSection.payoff,
    title: frontmatter.title,
  }))
  return (
    <Layout>
      <ServicesTemplate
        hero={{
          title,
          payoff: heroSection.payoff,
          image: heroSection.image,
        }}
        features={{
          title: featuresTitle,
          list: featuresList,
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
        instagram={{
          user: instagram.user,
          photos: instagramPhotos,
        }}
      />
    </Layout>
  )
}

Services.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
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
        services: PropTypes.shape({
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
  }),
}

export default Services

export const servicesQuery = graphql`
  query ServicesQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "services-page"}}) {
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
        services {
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

    servicesList: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "single-service-page"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            heroSection {
              image
              payoff
            }
          }
        }
      }
    }
  }
`
