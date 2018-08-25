import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const HomePageTemplate = (props) => {
  return (
    <section className="section section--gradient">
      lol template
      {console.log(props)}
    </section>
  )
}

HomePageTemplate.propTypes = {
}

const HomePage = (props) => {
  return (
    <HomePageTemplate
      {...props}
      // contentComponent={HTMLContent}
      // title={post.frontmatter.title}
      // content={post.html}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

export const homePageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        heroSection {
          heroBackgroundImage
          heroPayoff
          heroTitle
          heroPayoff
          HeroCtaServices {
            HeroCtaServicesItem
          }
        }
        homeDescriptionSection {
          homeDescriptionTitle
          homeFeatureColumn {
            homeFeatureBody
            homeFeatureCtaText
            homeFeatureCtaUrl
            homeFeatureIcon
            homeFeatureTitle
          }
        }
      }
    }
  }
`
