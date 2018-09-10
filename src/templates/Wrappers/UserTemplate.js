import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../../components/Content'
import UserHeader from '../../components/Sections/UserHeader'
import LatestNewsSection from '../../components/Sections/LatestNewsSection'
import InstagramSection from '../../components/Sections/InstagramSection'
import ServiceBody from '../../components/ServiceBody'

const UserTemplate = ({ name, body, image, avatar, tag, newsTitle, userRole }) => (
  <div>
    <UserHeader
      title={name}
      payoff={body}
      backgroundImage={image}
      userRole={userRole}
      avatar={avatar}
    />

    <ServiceBody />

    <LatestNewsSection
      title={newsTitle}
      tag={tag}
    />

    <InstagramSection instagramUsername="clockbeatsbrescia" photos={[{ id: 'BndRVOTAUsf' }, { id: 'BnXERRxFXXS' }, { id: 'BnUfbKpgire' }, { id: 'BnDt1NwDOaa' }]} />
  </div>
)

UserTemplate.propTypes = {
  name: PropTypes.string,
  body: PropTypes.string,
  image: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  newsTitle: PropTypes.string,
  userRole: PropTypes.string,
}


export default UserTemplate
