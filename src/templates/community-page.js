import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import HeroSection from '../components/Sections/HeroSection'
import HomeFeatures from '../components/Sections/HomeFeatures'
import LatestNewsSection from '../components/Sections/LatestNewsSection'
import InstagramSection from '../components/Sections/InstagramSection'
import TeamSection from '../components/Sections/TeamSection'
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

export const CommunityTemplate = ({ hero, featuresList, featuresTitle, teamSection, latestNews, instagram }) => (
  <div>
    <HeroSection
      title={hero.title}
      payoff={hero.payoff}
      backgroundImage={hero.image}
    // dropdownOptions={hero.ctaServices}
    />

    <HomeFeatures
      title={featuresTitle}
      features={featuresList}
    />

    <TeamSection
      title={teamSection.title}
      body={teamSection.body}
      team={teamSection.list}
    />

    <LatestNewsSection
      title={latestNews.title}
      tag={latestNews.tag}
    />

    <InstagramSection
      instagramUsername={instagram.user}
      photos={instagram.photos}
    />

  </div>
)

CommunityTemplate.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    payoff: PropTypes.string,
    image: PropTypes.string,
  }),
  featuresList: PropTypes.string,
  featuresTitle: PropTypes.string,
  teamSection: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    list: PropTypes.string,
  }),
  latestNews: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.string,
  }),
  instagram: PropTypes.shape({
    user: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
    })),
  }),
}

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
      list: [],
    }}
    latestNews={{
      title: 'Some cool stuff frow our blog',
      tag: 'tutorial',
    }}
    instagram={{
      user: 'clockbeatsbrescia',
      photots: [{ id: 'BndRVOTAUsf' }, { id: 'BnXERRxFXXS' }, { id: 'BnUfbKpgire' }, { id: 'BnDt1NwDOaa' }],
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
