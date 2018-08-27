import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import HomePageHero from '../components/Home/HomePageHero'

export const HomePageTemplate = (props) => {
  const {
    heroSection: { HeroCtaServices, heroBackgroundImage, heroPayoff, heroTitle },
    homeDescriptionSection: { homeDescriptionTitle, homeFeatureColumn }

  } = props.data.pageInfo.frontmatter
  const services = props.data.services.edges
  const team = props.data.team.edges
  return (
    <div>
      <HomePageHero
        title={heroTitle}
        payoff={heroPayoff}
        backgroundImage={heroBackgroundImage}
        dropdownOptions={HeroCtaServices}
      />
      <section class="section">
        <div class="container">
          <h1 class="title">{homeDescriptionTitle}</h1>
          <div className="columns">
            {homeFeatureColumn.map(col => (
              <div className="column" key={col.homeFeatureTitle}>
                <h3>{col.homeFeatureTitle}</h3>
                <p>{col.homeFeatureBody}</p>
                <a href={col.homeFeatureCtaUrl}>{col.homeFeatureCtaText}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h1 class="title">Services</h1>
          <div className="columns">
            {services.map(service => (
              <div className="column" key={service.node.id}>
                <h3>{service.node.frontmatter.title}</h3>
                <p><strong>{service.node.frontmatter.subtitle}</strong></p>
                <p>{service.node.frontmatter.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <h1 class="title">Team & Community</h1>
          <div className="columns">
            {team.map(member => (
              <div className="column" key={member.node.id}>
                <h3>{member.node.frontmatter.title}</h3>
                <p><strong>{member.node.frontmatter.profession}</strong></p>
                <p>{member.node.frontmatter.shortBio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>

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
    pageInfo: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        heroSection {
          heroBackgroundImage
          heroPayoff
          heroTitle
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

    team: allMarkdownRemark(filter: {
      frontmatter: {
        templateKey: { eq: "member" }
        isProfessional: { eq: true }
      }
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            avatar
            link
            profession
            isProfessional
            shortBio
            longBio
            link
            socials {
              Instagram
              facebook
              soundcloud
              spotify
            }
          }
        }
      }
    }

    services: allMarkdownRemark(filter: {
      frontmatter: {
        templateKey: { eq: "service" }
      }
    }) {
      edges {
        node {
          id
          frontmatter {
            title
            subtitle
            avatar
            link
            shortDescription
            longDescription
          }
        }
      }
    }
  }
`
