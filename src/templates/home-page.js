import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import HeroSection from '../components/Sections/HeroSection'
import HomeFeatures from '../components/Sections/HomeFeatures'
import DescriptionImageSection from '../components/Sections/DescriptionImageSection'
import TeamSection from '../components/Sections/TeamSection'
import ServicesSectionGrid from '../components/Sections/ServicesSectionGrid'
import LatestNewsSection from '../components/Sections/LatestNewsSection'
import InstagramSection from '../components/Sections/InstagramSection'
import HeroForm from '../components/Sections/HeroForm'
import image from '../img/acoustic-guitar.svg'

const teamList = [
  {
    id: '1',
    title: 'Paolo Mantini',
    avatar: 'http://i.pravatar.cc/300',
    link: '/community/jon-doe',
    profession: 'Record producer & Clockbeats CEO',
    bio: 'Paolo Mantini is a sound designer, musician, a poli-intrumentalist. He has an extensive network of professionals in the music industry worldwide.',
    instagram: 'https://intstagram.com',
    facebook: 'https://facebook.com',
    soundcloud: 'https://soundcloud.com',
    spotify: 'https://spotify.com',
  },
  {
    id: '1',
    title: 'Paolo Mantini',
    avatar: 'http://i.pravatar.cc/300',
    link: '/community/jon-doe',
    profession: 'Record producer & Clockbeats CEO',
    bio: 'Paolo Mantini is a sound designer, musician, a poli-intrumentalist. He has an extensive network of professionals in the music industry worldwide.',
    instagram: 'https://intstagram.com',
    facebook: 'https://facebook.com',
    soundcloud: 'https://soundcloud.com',
    spotify: 'https://spotify.com',
  },
  {
    id: '1',
    title: 'Paolo Mantini',
    avatar: 'http://i.pravatar.cc/300',
    link: '/community/jon-doe',
    profession: 'Record producer & Clockbeats CEO',
    bio: 'Paolo Mantini is a sound designer, musician, a poli-intrumentalist. He has an extensive network of professionals in the music industry worldwide.',
    instagram: 'https://intstagram.com',
    facebook: 'https://facebook.com',
    soundcloud: 'https://soundcloud.com',
    spotify: 'https://spotify.com',
  },
  {
    id: '1',
    title: 'Paolo Mantini',
    avatar: 'http://i.pravatar.cc/300',
    link: '/community/jon-doe',
    profession: 'Record producer & Clockbeats CEO',
    bio: 'Paolo Mantini is a sound designer, musician, a poli-intrumentalist. He has an extensive network of professionals in the music industry worldwide.',
    instagram: 'https://intstagram.com',
    facebook: 'https://facebook.com',
    soundcloud: 'https://soundcloud.com',
    spotify: 'https://spotify.com',
  },
]

const tempFeatures = [
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
    hero, features, descriptionImage, team, services, latestNews, formCta, instagram,
  } = props
  return (
    <div>
      <HeroSection
        title={hero.title}
        payoff={hero.payoff}
        backgroundImage={hero.image}
        dropdownOptions={hero.ctaServices}
        formTitle={hero.formTitle}
        showForm
      />
      <HomeFeatures
        title={features.title}
        features={features.list}
      />

      <DescriptionImageSection
        title={descriptionImage.title}
        body={descriptionImage.body}
        image={descriptionImage.image}
        links={descriptionImage.links}
      />

      <TeamSection
        title={team.title}
        body={team.body}
        team={team.list}
        showCta
      />

      <ServicesSectionGrid
        title={services.title}
        body={services.body}
        services={services.list}
      />

      <LatestNewsSection
        title={latestNews.title}
        tag={latestNews.tag}
      />

      <DescriptionImageSection
        title={formCta.title}
        bodyComponent={() => <HeroForm title={formCta.formTitle} unstyled dropdownOptions={hero.ctaServices} />}
        image={formCta.image}
        links={formCta.links}
        cardRight
      />

      <InstagramSection
        instagramUsername={instagram.user}
        photos={instagram.photos}
      />

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
    formTitle: PropTypes.string,
  }),
  features: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.string,
      body: PropTypes.string,
      url: PropTypes.string,
      text: PropTypes.string,
    })),
  }),
  descriptionImage: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.url,
    })),
  }),
  team: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      avatar: PropTypes.string,
      link: PropTypes.string,
      profession: PropTypes.string,
      bio: PropTypes.string,
      instagram: PropTypes.string,
      facebook: PropTypes.string,
      soundcloud: PropTypes.string,
      spotify: PropTypes.string,
    })),
  }),
  services: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      avatar: PropTypes.string,
      link: PropTypes.string,
      shortDescription: PropTypes.string,
      longDescription: PropTypes.string,
    })),
  }),
  latestNews: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.string,
  }),
  formCta: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.url,
    })),
  }),
  instagram: PropTypes.shape({
    user: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
    })),
  }),
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
        title: 'The simplest cloud platform for developers & teams',
        payoff: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, illo! Possimus ipsam enim veritatis natus eveniet quae quo dolores harum.',
        image: 'https://source.unsplash.com/collection/2068121/1920x1080',
        ctaServices: [
          { HeroCtaServicesItem: 'Mix' },
          { HeroCtaServicesItem: 'Mastering' },
          { HeroCtaServicesItem: 'Produzione assistita' },
          { HeroCtaServicesItem: 'Marketing' },
        ],
        formTitle: 'Contact us fro a estimate',
      }}
      features={{
        title: PropTypes.string,
        list: tempFeatures,
      }}
      descriptionImage={{
        title: 'Lorem ipsum dolor set',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magnam accusamus quo praesentium natus pariatur eum, molestiae cumque aliquam necessitatibus eligendi eos labore harum odio perferendis est modi perspiciatis ex.',
        image: 'https://source.unsplash.com/collection/2068121/1280x850',
        links: [
          { text: 'First Cta', url: '/' },
          { text: 'Second Cta', url: '/' },
        ],
      }}
      team={{
        title: 'Check our super professional team!',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae distinctio atque accusamus recusandae! Neque, possimus? Architecto optio fugiat, laudantium obcaecati, repellendus porro quo, deleniti velit quasi ea consectetur libero.',
        list: teamList,
      }}
      services={{
        title: 'What can we offer you?',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque odit labore omnis assumenda libero aliquid ab explicabo! Pariatur, ut esse. Illum, fuga veniam omnis nostrum consequatur nam? Quae, inventore!',
        list: tempServices,
      }}
      latestNews={{
        title: 'Check out our cool Blog',
        tag: 'tutorial',
      }}
      formCta={{
        title: 'Lorem ipsum dolor set',
        image: 'https://source.unsplash.com/collection/2068121/1280x850',
        formTitle: 'Contact us fro a estimate',
        links: [
          { text: 'First Cta', url: '/' },
          { text: 'Second Cta', url: '/' },
        ],
      }}
      instagram={{
        user: 'clockbeatsbrescia',
        photos: [
          { id: 'BndRVOTAUsf' },
          { id: 'BnXERRxFXXS' },
          { id: 'BnUfbKpgire' },
          { id: 'BnDt1NwDOaa' },
        ],
      }}
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
