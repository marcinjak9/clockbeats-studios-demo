import React from 'react'
import PropTypes from 'prop-types'
import ServicesPageTemplate from '../../templates/Wrappers/ServicesTemplate'

const ServicesPagePreview = ({ entry, widgetFor, getAsset, widgetsFor }) => {
  const features = []
  widgetsFor('featuresList').map((item) => {
    if (item) {
      features.push({
        title: item.getIn(['data', 'title']),
        body: item.getIn(['data', 'body']),
        text: item.getIn(['data', 'cta']),
        url: item.getIn(['data', 'url']),
        icon: getAsset(item.getIn(['data', 'img'])),
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
    <ServicesPageTemplate
      hero={{
        title: entry.getIn(['data', 'title']),
        payoff: entry.getIn(['data', 'heroSection', 'payoff']),
        image: getAsset(entry.getIn(['data', 'heroSection', 'image'])),
      }}
      features={{
        title: entry.getIn(['data', 'featuresTitle']),
        list: features,
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
      instagram={{
        user: entry.getIn(['data', 'instagram', 'user']),
        photos: instagram,
      }}
    />
  )
}

export default ServicesPagePreview