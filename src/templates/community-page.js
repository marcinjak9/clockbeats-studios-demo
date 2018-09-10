import React from 'react'
import PropTypes from 'prop-types'
import image from '../img/acoustic-guitar.svg'
import CommunityTemplate from './Wrappers/CommunityPageTemplate'

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


const Community = ({
  data: {
    community: {
      frontmatter: {
        title, heroSection, featuresTitle, featuresList, team, latestNews, instagram, instagramPhotos,
      },
    },
  },
}) => {
  const ciao = ''
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
  }
`
