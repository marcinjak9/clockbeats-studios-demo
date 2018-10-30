import React from 'react'
import PropTypes from 'prop-types'
import CommunityPageTemplate from '../../templates/Wrappers/CommunityPageTemplate'

const CommunityPagePreview = ({ entry, widgetFor, getAsset, widgetsFor }) => {
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
  const instagram = []
  widgetsFor('instagramPhotos').map((item) => {
    if (item) {
      instagram.push({ id: item.getIn(['data', 'id']) })
    }
  })
  return (
    <CommunityPageTemplate
      hero={{
        title: entry.getIn(['data', 'title']),
        payoff: entry.getIn(['data', 'heroSection', 'payoff']),
        image: getAsset(entry.getIn(['data', 'heroSection', 'image'])),
      }}
      featuresList={features}
      featuresTitle={entry.getIn(['data', 'featuresTitle'])}
      teamSection={{
        title: entry.getIn(['data', 'team', 'title']),
        body: entry.getIn(['data', 'team', 'body']),
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

export default CommunityPagePreview
