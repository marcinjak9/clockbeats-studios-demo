import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../../components/Content'
import HeroSection from '../../components/Sections/HeroSection'
import HomeFeatures from '../../components/Sections/HomeFeatures'
import LatestNewsSection from '../../components/Sections/LatestNewsSection'
import InstagramSection from '../../components/Sections/InstagramSection'
import TeamSection from '../../components/Sections/TeamSection'

const CommunityTemplate = ({ hero, featuresList, featuresTitle, teamSection, latestNews, instagram }) => (
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
  featuresList: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    cta: PropTypes.string,
    url: PropTypes.string,
    img: PropTypes.string,
  })),
  featuresTitle: PropTypes.string,
  teamSection: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    list: PropTypes.array,
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

export default CommunityTemplate
