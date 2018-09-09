import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import HomePageHero from '../components/Home/HomePageHero'
import HomeFeatures from '../components/Home/HomeFeatures'
import DescriptionImageSection from '../components/Home/DescriptionImageSection'

const features = [
  {
    id: 1,
    title: 'Build better apps faster',
    body: 'From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help teams spend more time building better software for your customers.',
    cta: 'Learn more about our products',
    url: '/',
    img: 'https://placehold.it/64x64',
  },
  {
    id: 2,
    title: 'Build better apps faster',
    body: 'From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help teams spend more time building better software for your customers.',
    cta: 'Learn more about our products',
    url: '/',
    img: 'https://placehold.it/64x64',
  },
  {
    id: 3,
    title: 'Build better apps faster',
    body: 'From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help teams spend more time building better software for your customers.',
    cta: 'Learn more about our products',
    url: '/',
    img: 'https://placehold.it/64x64',
  },
]

export const HomePageTemplate = (props) => {
  const {
    hero, descriptionSection, team, services,
  } = props
  return (
    <div>
      <HomePageHero
        title={hero.title}
        payoff={hero.payoff}
        backgroundImage={hero.image}
        dropdownOptions={hero.ctaServices}
      />
      <HomeFeatures
        title="An infrastructure experience development teams love with the features your business needs"
        features={features}
      />

      <DescriptionImageSection
        title="Lorem Ipsum dolor set"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magnam accusamus quo praesentium natus pariatur eum, molestiae cumque aliquam necessitatibus eligendi eos labore harum odio perferendis est modi perspiciatis ex."
        image="https://source.unsplash.com/collection/2068121/1280x850"
        links={[
          { name: 'First Cta', url: '/' },
          { name: 'Second Cta', url: '/' },
        ]}
      />

      <section className="container-fluid text-center default-section">
        <h2>Team section</h2>
      </section>

      <section className="container-fluid text-center default-section">
        <h2>Services</h2>
      </section>

      <section className="container-fluid text-center default-section">
        <h2>Contact us</h2>
      </section>

      <section className="container-fluid text-center default-section">
        <h2>Instagram</h2>
      </section>

    </div>

  )
}

HomePageTemplate.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    payoff: PropTypes.string,
    image: PropTypes.string,
    ctaServices: PropTypes.arrayOf(PropTypes.shape({
      HeroCtaServicesItem: PropTypes.string,
    })),
  }),
  descriptionSection: PropTypes.shape({
    title: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.string,
      body: PropTypes.string,
      url: PropTypes.string,
      text: PropTypes.string,
    })),
  }),
  team: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      avatar: PropTypes.string,
      link: PropTypes.string,
      profession: PropTypes.string,
      isProfessional: PropTypes.bool,
      shortBio: PropTypes.string,
      longBio: PropTypes.string,
      socials: PropTypes.shape({
        Instagram: PropTypes.string,
        facebook: PropTypes.string,
        soundcloud: PropTypes.string,
        spotify: PropTypes.string,
      }),
    }),
  })),
  services: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    frontmatter: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string,
      avatar: PropTypes.string,
      link: PropTypes.string,
      shortDescription: PropTypes.string,
      longDescription: PropTypes.string,
    }),
  })),
}

const HomePage = ({
  data: {
    pageInfo: {
      frontmatter: {
        heroSection,
        homeDescriptionSection,
      },
    },
    team: {
      edges: team,
    },
    services: {
      edges: services,
    },
  },
}) => {
  const {
    heroTitle, heroPayoff, heroBackgroundImage, HeroCtaServices,
  } = heroSection
  const { homeDescriptionTitle, homeFeatureColumn } = homeDescriptionSection
  const descriptionColumns = homeFeatureColumn.map(column => ({
    title: column.homeFeatureTitle,
    icon: column.homeFeatureIcon,
    body: column.homeFeatureBody,
    url: column.homeFeatureCtaUrl,
    text: column.homeFeatureCtaText,
  }))
  return (
    <HomePageTemplate
      hero={{
        title: heroTitle,
        payoff: heroPayoff,
        image: heroBackgroundImage,
        ctaServices: HeroCtaServices,
      }}
      descriptionSection={{
        title: homeDescriptionTitle,
        columns: descriptionColumns,
      }}
      team={team}
      services={services}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    pageInfo: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        heroSection: PropTypes.shape({
          heroBackgroundImage: PropTypes.string,
          heroPayoff: PropTypes.string,
          heroTitle: PropTypes.string,
          HeroCtaServices: PropTypes.arrayOf(PropTypes.shape({
            HeroCtaServicesItem: PropTypes.string,
          })),
        }),
        homeDescriptionSection: PropTypes.shape({
          homeDescriptionTitle: PropTypes.string,
          homeFeatureColumn: PropTypes.arrayOf(PropTypes.shape({
            homeFeatureBody: PropTypes.string,
            homeFeatureCtaText: PropTypes.string,
            homeFeatureCtaUrl: PropTypes.string,
            homeFeatureIcon: PropTypes.string,
            homeFeatureTitle: PropTypes.string,
          })),
        }),
      }),
    }),
    team: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        frontmatter: PropTypes.shape({
          title: PropTypes.string,
          avatar: PropTypes.string,
          link: PropTypes.string,
          profession: PropTypes.string,
          isProfessional: PropTypes.bool,
          shortBio: PropTypes.string,
          longBio: PropTypes.string,
          socials: PropTypes.shape({
            Instagram: PropTypes.string,
            facebook: PropTypes.string,
            soundcloud: PropTypes.string,
            spotify: PropTypes.string,
          }),
        }),
      })),
    }),
    services: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        frontmatter: PropTypes.shape({
          title: PropTypes.string,
          subtitle: PropTypes.string,
          avatar: PropTypes.string,
          link: PropTypes.string,
          shortDescription: PropTypes.string,
          longDescription: PropTypes.string,
        }),
      })),
    }),
  }),
}

export default HomePage

export const homePageQuery = graphql`
  query HomePage {
    pageInfo: markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
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
    team: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "member"}, isProfessional: {eq: true}}}) {
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
    services: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "service"}}}) {
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
