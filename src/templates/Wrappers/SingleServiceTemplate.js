import React from 'react'
import PropTypes from 'prop-types'

import Content, { HTMLContent } from '../../components/Content'
import HeroSection from '../../components/Sections/HeroSection'
import HomeFeatures from '../../components/Sections/HomeFeatures'
import LatestNewsSection from '../../components/Sections/LatestNewsSection'
import InstagramSection from '../../components/Sections/InstagramSection'
import ServicesSectionCards from '../../components/Sections/ServicesSectionCards'
import ServiceBody from '../../components/ServiceBody'

const SingleServiceTemplate = ({ hero, features, services, latestNews, instagram, contentComponent, content }) => {
  const PostContent = contentComponent || Content
  return (
    <div>
      <HeroSection
        title={hero.title}
        payoff={hero.payoff}
        backgroundImage={hero.image}
      />

      <HomeFeatures
        title={features.title}
        features={features.list}
      />

      <ServiceBody content={content} contentComponent={PostContent} />

      <LatestNewsSection
        title={latestNews.title}
        tag={latestNews.tag}
      />

      <ServicesSectionCards
        title={services.title}
        body={services.body}
        services={services.list}
      />

      <InstagramSection
        instagramUsername={instagram.user}
        photos={instagram.photos}
      />
    </div>
  )
}
SingleServiceTemplate.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    payoff: PropTypes.string,
    image: PropTypes.any,
  }),
  features: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.any,
      body: PropTypes.string,
      url: PropTypes.string,
      text: PropTypes.string,
    })),
  }),
  services: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      avatar: PropTypes.any,
      link: PropTypes.string,
      shortDescription: PropTypes.string,
      longDescription: PropTypes.string,
    })),
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

export default SingleServiceTemplate
