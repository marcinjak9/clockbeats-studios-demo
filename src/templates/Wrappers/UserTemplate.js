import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../../components/Content'
import UserHeader from '../../components/Sections/UserHeader'
import LatestNewsSection from '../../components/Sections/LatestNewsSection'
import InstagramSection from '../../components/Sections/InstagramSection'
import ServiceBody from '../../components/ServiceBody'

const UserTemplate = ({ name, body, image, avatar, tag, newsTitle, userRole, instagram }) => (
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

    <InstagramSection
      instagramUsername={instagram.user}
      photos={instagram.photos}
    />
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
  instagram: PropTypes.shape({
    user: PropTypes.string,
    photos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
    })),
  }),
}


export default UserTemplate
