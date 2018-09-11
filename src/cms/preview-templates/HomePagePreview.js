import React from 'react'
import PropTypes from 'prop-types'
import HomePageTemplate from '../../templates/Wrappers/HomePageTemplate'

const HomePagePreview = ({ entry, widgetFor, getAsset, widgetsFor }) => {
  const widget = ''
  const features = []
  widgetsFor('featuresList').map((item) => {
    if (item) {
      features.push({
        title: item.getIn(['data', 'title']),
        body: item.getIn(['data', 'body']),
        cta: item.getIn(['data', 'cta']),
        url: item.getIn(['data', 'url']),
        img: getAsset(item.getIn(['data', 'img'])),
      })
    }
  })
  const links = []
  widgetsFor('descriptionImageLinks').map((item) => {
    if (item) {
      links.push({
        text: item.getIn(['data', 'text']),
        url: item.getIn(['data', 'url']),
      })
    }
  })
  const instagram = []
  widgetsFor('instagramPhotos').map((item) => {
    if (item) {
      instagram.push({ id: item.getIn(['data', 'id']) })
    }
  })
  return (
    <HomePageTemplate
      hero={{
        title: entry.getIn(['data', 'title']),
        payoff: entry.getIn(['data', 'heroSection', 'payoff']),
        image: getAsset(entry.getIn(['data', 'heroSection', 'image'])),
        ctaServices: [],
        formTitle: entry.getIn(['data', 'heroSection', 'formTitle']),
      }}
      features={{
        title: entry.getIn(['data', 'featuresTitle']),
        list: features,
      }}
      descriptionImage={{
        title: entry.getIn(['data', 'descriptionImage', 'title']),
        body: entry.getIn(['data', 'descriptionImage', 'body']),
        image: getAsset(entry.getIn(['data', 'descriptionImage', 'image'])),
        links,
      }}
      team={{
        title: entry.getIn(['data', 'team', 'title']),
        body: entry.getIn(['data', 'team', 'body']),
        list: [],
      }}
      services={{
        title: entry.getIn(['data', 'services', 'title']),
        body: entry.getIn(['data', 'services', 'body']),
        list: [],
      }}
      latestNews={{
        title: entry.getIn(['data', 'latestNews', 'title']),
        tag: entry.getIn(['data', 'latestNews', 'tag']),
      }}
      formCta={{
        title: entry.getIn(['data', 'formCta', 'title']),
        image: getAsset(entry.getIn(['data', 'formCta', 'image'])),
        formTitle: entry.getIn(['data', 'formCta', 'formTitle']),
      }}
      instagram={{
        user: entry.getIn(['data', 'instagram', 'user']),
        photos: instagram,
      }}
    />
  )
}

export default HomePagePreview
