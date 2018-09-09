import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Content, { HTMLContent } from '../components/Content'
import HomePageHero from '../components/Home/HomePageHero'
import HomeFeatures from '../components/Home/HomeFeatures'
import DescriptionImageSection from '../components/Home/DescriptionImageSection'
import TeamSection from '../components/Home/TeamSection'
import ServicesSectionGrid from '../components/Home/ServicesSectionGrid'
import LatestNewsSection from '../components/Home/LatestNewsSection'
import ClockbeatsMapSection from '../components/Home/ClockbeatsMapSection'
import InstagramSection from '../components/Home/InstagramSection'
import HeroForm from '../components/Home/HeroForm'
import image from '../img/acoustic-guitar.svg'

const features = [
  {
    id: 1,
    title: 'Build better apps faster',
    body: 'From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help teams spend more time building better software for your customers.',
    cta: 'Learn more about our products',
    url: '/',
    img: image,
  },
  {
    id: 2,
    title: 'Build better apps faster',
    body: 'From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help teams spend more time building better software for your customers.',
    cta: 'Learn more about our products',
    url: '/',
    img: image,
  },
  {
    id: 3,
    title: 'Build better apps faster',
    body: 'From effortless administration tools to robust compute, storage, and networking services, we provide an all-in-one cloud to help teams spend more time building better software for your customers.',
    cta: 'Learn more about our products',
    url: '/',
    img: image,
  },
]

const tempServices = [
  { title: 'Produzione assistita', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: '/services/produzione-assistita', img: 'https://source.unsplash.com/collection/2068121/850x851' },
  { title: 'Professionals netwok', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: '/services/produzione-assistita', img: 'https://source.unsplash.com/collection/2068121/850x852' },
  { title: 'Promotion', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: '/services/produzione-assistita', img: 'https://source.unsplash.com/collection/2068121/850x853' },
  { title: 'Live', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: '/services/produzione-assistita', img: 'https://source.unsplash.com/collection/2068121/850x854' },
  { title: 'Photo & Video', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: '/services/produzione-assistita', img: 'https://source.unsplash.com/collection/2068121/850x854' },
]

export const HomePageTemplate = (props) => {
  const {
    hero, descriptionSection, team, services,
  } = props
  return (
    <div>
      <HomePageHero
        title="The simplest cloud platform for developers & teams"
        payoff={hero.payoff}
        backgroundImage={hero.image}
        dropdownOptions={hero.ctaServices}
        formTitle="Lorem ipsum dolor set morts eres"
        showForm
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

      <TeamSection
        title="Lorem Ipsum dolor set imani not"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae distinctio atque accusamus recusandae! Neque, possimus? Architecto optio fugiat, laudantium obcaecati, repellendus porro quo, deleniti velit quasi ea consectetur libero."
        team={[]}
        showCta
      />

      <ServicesSectionGrid
        title="What we can you offer?"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque odit labore omnis assumenda libero aliquid ab explicabo! Pariatur, ut esse. Illum, fuga veniam omnis nostrum consequatur nam? Quae, inventore!"
        services={tempServices}
      />

      <LatestNewsSection
        title="Some cool thing frow our blog"
        posts={[1, 2, 3]}
      />

      {/* <ClockbeatsMapSection /> */}

      <DescriptionImageSection
        title="Contact us to boost your career"
        bodyComponent={() => <HeroForm title="Contact us for a estimate" unstyled dropdownOptions={hero.ctaServices} />}
        image="https://source.unsplash.com/collection/2068121/1280x850"
        links={[
          { name: 'First Cta', url: '/' },
          { name: 'Second Cta', url: '/' },
        ]}
        cardRight
      />

      <InstagramSection />

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
