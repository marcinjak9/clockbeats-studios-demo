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


const Community = props => (
  <CommunityTemplate
    hero={{
      title: 'Our rich community of Professionals & Artist',
      payoff: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas adipisci quod voluptatem amet fugit assumenda ipsa dolore iusto repellendus nesciunt deserunt a saepe doloribus, aut est harum, necessitatibus ullam debitis!',
      image: 'https://source.unsplash.com/collection/2068121/1920x1080',
    }}
    featuresTitle="An infrastructure experience development teams love with the features your business needs"
    featuresList={features}
    teamSection={{
      title: 'Lorem Ipsum dolor set imani not',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae distinctio atque accusamus recusandae! Neque, possimus? Architecto optio fugiat, laudantium obcaecati, repellendus porro quo, deleniti velit quasi ea consectetur libero.',
      list: teamList,
    }}
    latestNews={{
      title: 'Some cool stuff frow our blog',
      tag: 'tutorial',
    }}
    instagram={{
      user: 'clockbeatsbrescia',
      photos: [{ id: 'BndRVOTAUsf' }, { id: 'BnXERRxFXXS' }, { id: 'BnUfbKpgire' }, { id: 'BnDt1NwDOaa' }],
    }}
  // contentComponent={HTMLContent}
  // title={post.frontmatter.title}
  // content={post.html}
  />
)

Community.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Community
