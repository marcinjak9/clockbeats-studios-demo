import React from 'react'
import PropTypes from 'prop-types'
import SingleServiceTemplate from './Wrappers/SingleServiceTemplate'
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
]

const SingleService = props => (
  <SingleServiceTemplate
    hero={{
      title: 'The simplest cloud platform for developers & teams',
      payoff: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum, illo! Possimus ipsam enim veritatis natus eveniet quae quo dolores harum.',
      image: 'https://source.unsplash.com/collection/2068121/1920x1080',
    }}
    features={{
      title: 'Lorem Ipsum dolor set inem ami mortes tua.',
      list: features,
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
    instagram={{
      user: 'clockbeatsbrescia',
      photos: [
        { id: 'BndRVOTAUsf' },
        { id: 'BnXERRxFXXS' },
        { id: 'BnUfbKpgire' },
        { id: 'BnDt1NwDOaa' },
      ],
    }}
  // contentComponent={HTMLContent}
  // title={post.frontmatter.title}
  // content={post.html}
  />
)

SingleService.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SingleService
