import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../../components/Content'
import HeroSection from '../../components/Sections/HeroSection'
import HomeFeatures from '../../components/Sections/HomeFeatures'
import DescriptionImageSection from '../../components/Sections/DescriptionImageSection'
import TeamSection from '../../components/Sections/TeamSection'
import ServicesSectionGrid from '../../components/Sections/ServicesSectionGrid'
import LatestNewsSection from '../../components/Sections/LatestNewsSection'
import InstagramSection from '../../components/Sections/InstagramSection'
import HeroForm from '../../components/Sections/HeroForm'

const HomePageTemplate = (props) => {
  const {
    hero, features, descriptionImage, team, services, latestNews, formCta, instagram, config,
  } = props
  return (
    <div>
      <HeroSection
        title={hero.title}
        payoff={hero.payoff}
        backgroundImage={hero.image}
        dropdownOptions={hero.ctaServices}
        formTitle={hero.formTitle}
        showForm
        formName={`${config.branch}-form`}
      />
      <HomeFeatures
        title={features.title}
        features={features.list}
      />

      <DescriptionImageSection
        title={descriptionImage.title}
        body={descriptionImage.body}
        image={descriptionImage.image}
        links={descriptionImage.links}
      />

      <TeamSection
        title={team.title}
        body={team.body}
        team={team.list}
        showCta
      />

      <ServicesSectionGrid
        title={services.title}
        body={services.body}
        services={services.list}
      />

      <LatestNewsSection
        title={latestNews.title}
        tag={latestNews.tag}
      />

      <DescriptionImageSection
        title={formCta.title}
        bodyComponent={() => <HeroForm title={formCta.formTitle} unstyled dropdownOptions={hero.ctaServices} />}
        image={formCta.image}
        cardRight
      />

      <InstagramSection
        instagramUsername={instagram.user}
        photos={instagram.photos}
      />

    </div>

  )
}

HomePageTemplate.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    payoff: PropTypes.string,
    image: PropTypes.string,
    ctaServices: PropTypes.arrayOf(PropTypes.shape({
      HeroCtaServicesItem: PropTypes.string,
    })),
    formTitle: PropTypes.string,
  }),
  features: PropTypes.shape({
    title: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      icon: PropTypes.string,
      body: PropTypes.string,
      url: PropTypes.string,
      text: PropTypes.string,
    })),
  }),
  descriptionImage: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.string,
    links: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string,
      url: PropTypes.url,
    })),
  }),
  team: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      avatar: PropTypes.string,
      link: PropTypes.string,
      profession: PropTypes.string,
      bio: PropTypes.string,
      instagram: PropTypes.string,
      facebook: PropTypes.string,
      soundcloud: PropTypes.string,
      spotify: PropTypes.string,
    })),
  }),
  services: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    list: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      avatar: PropTypes.string,
      link: PropTypes.string,
      shortDescription: PropTypes.string,
      longDescription: PropTypes.string,
    })),
  }),
  latestNews: PropTypes.shape({
    title: PropTypes.string,
    tag: PropTypes.string,
  }),
  formCta: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
  }),
  instagram: PropTypes.shape({
    user: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
    })),
  }),
  config: PropTypes.shape({
    branch: PropTypes.string,
  }),
}

export default HomePageTemplate
