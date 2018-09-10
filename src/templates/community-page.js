import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import HomePageHero from '../components/Home/HomePageHero'
import HomeFeatures from '../components/Home/HomeFeatures'
import LatestNewsSection from '../components/Home/LatestNewsSection'
import InstagramSection from '../components/Home/InstagramSection'
import TeamSection from '../components/Home/TeamSection'
import ServicesSectionCards from '../components/Home/ServicesSectionCards'
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

export const CommunityTemplate = props => (
  <div>
    <HomePageHero
      title="Our rich community of Professionals & Artist"
      payoff="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas adipisci quod voluptatem amet fugit assumenda ipsa dolore iusto repellendus nesciunt deserunt a saepe doloribus, aut est harum, necessitatibus ullam debitis!"
      backgroundImage="https://source.unsplash.com/collection/2068121/1920x1080"
    // dropdownOptions={hero.ctaServices}
    />

    <HomeFeatures
      title="An infrastructure experience development teams love with the features your business needs"
      features={features}
    />

    <TeamSection
      title="Lorem Ipsum dolor set imani not"
      body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae distinctio atque accusamus recusandae! Neque, possimus? Architecto optio fugiat, laudantium obcaecati, repellendus porro quo, deleniti velit quasi ea consectetur libero."
      team={[]}
      professionals
    />

    <LatestNewsSection
      title="Some cool thing frow our blog"
      tag="tutorial"
      posts={[1, 2, 3]}
    />

    <InstagramSection />

  </div>
)

CommunityTemplate.propTypes = {
}

const Community = props => (
  <CommunityTemplate
    {...props}
  // contentComponent={HTMLContent}
  // title={post.frontmatter.title}
  // content={post.html}
  />
)

Community.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Community
