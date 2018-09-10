import React from 'react'
import PropTypes from 'prop-types'
import image from '../img/acoustic-guitar.svg'
import HomePageTemplate from './Wrappers/HomePageTemplate'

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


const HomePage = ({
  data: {
    home: {
      frontmatter: {
        title, heroSection, featuresTitle, featuresList, descriptionImage, descriptionImageLinks,
        team, services, latestNews, formCta, formCtaLinks, instagram, instagramPhotos,
      },
    },
  },
}) => {
  const ciao = 'ciao'
  return (
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
        list: tempServices,
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
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    home: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        heroSection: PropTypes.shape({
          image: PropTypes.string,
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
          img: PropTypes.string,
        })),
        descriptionImage: PropTypes.shape({
          title: PropTypes.string,
          body: PropTypes.string,
          image: PropTypes.string,
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
          image: PropTypes.string,
        }),
        instagram: PropTypes.shape({
          user: PropTypes.string,
        }),
        instagramPhotos: PropTypes.arrayOf(PropTypes.shape({
          id: PropTypes.string,
        })),
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
    home: markdownRemark(frontmatter: {templateKey: {eq: "home-page"}}) {
      frontmatter {
        title
        heroSection {
          image
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
          img
        }
        descriptionImage {
          title
          body
          image
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
          image
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
