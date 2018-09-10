import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import UserHeader from '../components/Sections/UserHeader'
import LatestNewsSection from '../components/Sections/LatestNewsSection'
import InstagramSection from '../components/Sections/InstagramSection'
import ServiceBody from '../components/ServiceBody'

export const UserTemplate = ({ name, body, image, avatar, tag, newsTitle, userRole }) => (
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

const UserPage = props => (
  <UserTemplate
    name="Jon Doe"
    body="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas adipisci quod voluptatem amet fugit assumenda ipsa dolore iusto repellendus nesciunt deserunt a saepe doloribus, aut est harum, necessitatibus ullam debitis!"
    image="https://source.unsplash.com/collection/2068121/1920x1080"
    userRole="Senior Producer"
    avatar="http://i.pravatar.cc/300"
    tag="tutorial"
    newsTitle="Scopri di più"
  // contentComponent={HTMLContent}
  // content={post.html}
  />
)

UserPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UserPage
