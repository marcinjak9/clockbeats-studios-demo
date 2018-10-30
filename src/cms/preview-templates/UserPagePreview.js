import React from 'react'
import PropTypes from 'prop-types'
import UserTemplate from '../../templates/Wrappers/UserTemplate'

const UserPagePreview = ({ entry, widgetFor, getAsset, widgetsFor }) => {
  const instagram = []
  widgetsFor('instagramPhotos').map((item) => {
    if (item) {
      instagram.push({ id: item.getIn(['data', 'id']) })
    }
  })
  console.log(getAsset(entry.getIn(['data', 'image'])));
  return (
    <UserTemplate
      name={entry.getIn(['data', 'title'])}
      body={entry.getIn(['data', 'userBody'])}
      image={getAsset(entry.getIn(['data', 'image']))}
      userRole={entry.getIn(['data', 'userRole'])}
      avatar={getAsset(entry.getIn(['data', 'avatar']))}
      tag={entry.getIn(['data', 'tag'])}
      newsTitle={entry.getIn(['data', 'newsTitle'])}
      instagram={entry.getIn(['data', 'instagram'])}
      instagramPhotos={instagram}
      socials={entry.getIn(['data', 'socials'])}
      content={widgetFor('body')}
    />
  )
}

UserPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  widgetsFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default UserPagePreview
