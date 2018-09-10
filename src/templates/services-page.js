import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import HeroSection from '../components/Sections/HeroSection'
import HomeFeatures from '../components/Sections/HomeFeatures'
import LatestNewsSection from '../components/Sections/LatestNewsSection'
import InstagramSection from '../components/Sections/InstagramSection'
import ServicesSectionCards from '../components/Sections/ServicesSectionCards'
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
  { title: 'Photo & Video', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: '/services/produzione-assistita', img: 'https://source.unsplash.com/collection/2068121/850x855' },
  { title: 'Produzione assistita', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: '/services/produzione-assistita', img: 'https://source.unsplash.com/collection/2068121/850x856' },
  { title: 'Professionals netwok', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: '/services/produzione-assistita', img: 'https://source.unsplash.com/collection/2068121/850x857' },
  { title: 'Promotion', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: '/services/produzione-assistita', img: 'https://source.unsplash.com/collection/2068121/850x858' },
  { title: 'Live', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: '/services/produzione-assistita', img: 'https://source.unsplash.com/collection/2068121/850x859' },
  { title: 'Photo & Video', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.', url: '/services/produzione-assistita', img: 'https://source.unsplash.com/collection/2068121/851x850' },
]

export const ServicesTemplate = props => (
  <div>
    <HeroSection
      title="The simplest cloud platform for developers & teams"
      payoff="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas adipisci quod voluptatem amet fugit assumenda ipsa dolore iusto repellendus nesciunt deserunt a saepe doloribus, aut est harum, necessitatibus ullam debitis!"
      backgroundImage="https://source.unsplash.com/collection/2068121/1920x1080"
      // dropdownOptions={hero.ctaServices}
      formTitle="Lorem ipsum dolor set morts eres"
    />

    <HomeFeatures
      title="An infrastructure experience development teams love with the features your business needs"
      features={features}
    />

    <ServicesSectionCards
      title="Complete List of our services "
      body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet itaque odit labore omnis assumenda libero aliquid ab explicabo! Pariatur, ut esse. Illum, fuga veniam omnis nostrum consequatur nam? Quae, inventore!"
      services={tempServices}
    />

    <LatestNewsSection
      title="Some cool thing frow our blog"
      posts={[1, 2, 3]}
    />

    <InstagramSection instagramUsername="clockbeatsbrescia" photos={[{ id: 'BndRVOTAUsf' }, { id: 'BnXERRxFXXS' }, { id: 'BnUfbKpgire' }, { id: 'BnDt1NwDOaa' }]} />

  </div>
)

ServicesTemplate.propTypes = {
}

const Services = props => (
  <ServicesTemplate
    {...props}
  // contentComponent={HTMLContent}
  // title={post.frontmatter.title}
  // content={post.html}
  />
)

Services.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Services
