import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../../components/Content'
import UserHeader from '../../components/Sections/UserHeader'
import LatestNewsSection from '../../components/Sections/LatestNewsSection'
import InstagramSection from '../../components/Sections/InstagramSection'
import ServiceBody from '../../components/ServiceBody'

const UserTemplate = ({ name, body, image, avatar, tag, newsTitle, userRole, instagram, instagramPhotos, socials, contentComponent, content }) => {
  const PostContent = contentComponent || Content
  return (
    <div>
      <UserHeader
        title={name}
        payoff={body}
        backgroundImage={image}
        userRole={userRole}
        avatar={avatar}
        socials={socials}
      />

      <ServiceBody contentComponent={PostContent} content={content} />

      <LatestNewsSection
        title={newsTitle}
        tag={tag}
      />

      <InstagramSection
        instagramUsername={instagram.user}
        photos={instagramPhotos}
      />
    </div>
  )
}

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
  }),
  instagramPhotos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
  })),
  socials: PropTypes.shape({
    instagram: PropTypes.string,
    facebook: PropTypes.string,
    soundcloud: PropTypes.string,
    spotify: PropTypes.string,
  }),
}


export default UserTemplate
