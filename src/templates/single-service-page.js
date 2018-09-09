import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import HomePageHero from '../components/Home/HomePageHero'
import HomeFeatures from '../components/Home/HomeFeatures'
import LatestNewsSection from '../components/Home/LatestNewsSection'
import InstagramSection from '../components/Home/InstagramSection'
import ServiceBody from '../components/ServiceBody'
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

export const SingleServiceTemplate = props => (
  <div>
    <HomePageHero
      title="Produzione assista"
      payoff="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas adipisci quod voluptatem amet fugit assumenda ipsa dolore iusto repellendus nesciunt deserunt a saepe doloribus, aut est harum, necessitatibus ullam debitis!"
      backgroundImage="https://source.unsplash.com/collection/2068121/1920x1080"
    />

    <HomeFeatures
      title="Come funziona la produzione assistita?"
      features={features}
    />

    <ServiceBody />

    <LatestNewsSection
      title="Scopri di piu"
      posts={[1, 2, 3]}
    />

    <InstagramSection />
  </div>
)

SingleServiceTemplate.propTypes = {
}

const SingleService = props => (
  <SingleServiceTemplate
    {...props}
  // contentComponent={HTMLContent}
  // title={post.frontmatter.title}
  // content={post.html}
  />
)

SingleService.propTypes = {
  data: PropTypes.object.isRequired,
}

export default SingleService
