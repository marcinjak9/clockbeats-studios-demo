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
      {/* <section class="section">
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
      </section> */}

      <div className="section">
        <div className="container is-fluid has-text-centered">
          <h2 className="title is-2">Lorem ipsum dolor sit amet</h2>
          <div className="columns">
            <div className="column">
              <h3 className="title is-3">col 1</h3>
              <p className="subtitle-is-6">Lorem ipsum dolor sit amet et eniqua res in castra siatdolor sit amet et eniqua res in castra siat, concupiscit abem siat queusque tandem abutere</p>
              <h3 className="title is-5">Read more about</h3>
            </div>
            <div className="column">
              <h3 className="title is-3">col 1</h3>
              <p className="subtitle-is-6">Lorem ipsum dolor sit amet et eniqua res in castra siatdolor sit amet et eniqua res in castra siat, concupiscit abem siat queusque tandem abutere</p>
              <h3 className="title is-5">Read more about</h3>
            </div>
            <div className="column">
              <h3 className="title is-3">col 1</h3>
              <p className="subtitle-is-6">Lorem ipsum dolor sit amet et eniqua res in castra siatdolor sit amet et eniqua res in castra siat, concupiscit abem siat queusque tandem abutere</p>
              <h3 className="title is-5">Read more about</h3>
            </div>
          </div>
        </div>
      </div>

      {/*TEAM SECTION*/}

      <div className="section dark-bg">
        <div className="container is-fluid has-text-centered">
          <h2 className="title is-2 primary-text">Team Section</h2>
          <div className="column"></div>

          <div className="columns">
            <div className="column is-one-third">
              <div className="box team-box">
                <div className="image">
                  <img className="rounded has-shadow" src="https://bulma.io/images/placeholders/128x128.png"></img>
                </div>
                <article className="media">

                  <div className="media-content has-text-centered">
                    <div className="content">
                      <p>
                        <strong>John Smith</strong> <br></br> <small>graphic designer</small>
                      </p>
                    </div>
                    {/* TODO: centrare bla bla */}
                    <div className="column is-mobile has-text-centered" style={{ width: "7rem", margin: "auto" }}>
                      <div className="level">
                        <a className="level-item" aria-label="reply">
                          <span className="icon is-small">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                          </span>
                        </a>
                        <a className="level-item" aria-label="retweet">
                          <span className="icon is-small">
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                          </span>
                        </a>
                        <a className="level-item" aria-label="like">
                          <span className="icon is-small">
                            <i className="far fa-envelope" aria-hidden="true"></i>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/*SERVICE section*/}
      <div className="section">
        <div className="container is-fluid has-text-centered">
          <h2 className="title is-2 primary-text">Services Section</h2>
          <h3 className="subtitle is-4">Lorem ipsum dolor sit amet consecutur adipiscit elit, consecutur qua numus adibimus.</h3>
          <div className="columns">
            <div className="column">
              <div className="box">
                <h3 className="title is-4">lorem ipsum</h3>
                <p>Lorem ipsum dolor sit eniqua re in castra suis admittit</p>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <h3 className="title is-4">lorem ipsum</h3>
                <p>Lorem ipsum dolor sit eniqua re in castra suis admittit</p>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <h3 className="title is-4">lorem ipsum</h3>
                <p>Lorem ipsum dolor sit eniqua re in castra suis admittit</p>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <h3 className="title is-4">lorem ipsum</h3>
                <p>Lorem ipsum dolor sit eniqua re in castra suis admittit</p>
              </div>
            </div>
          </div>
          <a className="button primary-btn">read more</a>
        </div>
      </div>

      {/*cCONTACT US section*/}

      <div className="section primary-bg">
        <div className="container is-fluid has-text-centered">
          <h2 className="title is-2">Contact us!</h2>
          <div className="columns">
            <div className="column">
              <i className="fa fa-map-marker-alt white-text"></i><p className="subtitle is-6 white-text">Via Insert Address</p>
            </div>
            <div className="column">
              <i className="fa fa-phone white-text"></i><p className="subtitle is-6 white-text">+39 328 1013 772</p>
            </div>
            <div className="column">
              <i className="fa fa-envelope white-text"></i><p className="subtitle is-6 white-text">clockbeats@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/*INSTAGRAM SECTION*/}

      <div className="section">
        <div className="container is-fluid has-text-centered">
          <div className="column">
            <i className="fab fa-instagram"></i>
          </div>
          <h2 className="title is-2">Follow us on Instagram!</h2>
          <h3 className="subtitle is-6">@clockbeats.milan</h3>

          <div className="columns">
            <div className="column is-one-third">
              <figure className="image is-350x350">
                <img src="https://via.placeholder.com/350x350"></img>
              </figure>
            </div>
            <div className="column is-one-third">
              <figure className="image is-350x350">
                <img src="https://via.placeholder.com/350x350"></img>
              </figure>
            </div>
            <div className="column is-one-third">
              <figure className="image is-350x350">
                <img src="https://via.placeholder.com/350x350"></img>
              </figure>
            </div>
          </div>
        </div>
      </div>

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
          pageInfo: markdownRemark(id: {eq: $id }) {
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
          templateKey: {eq: "member" }
        isProfessional: {eq: true }
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
          templateKey: {eq: "service" }
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
