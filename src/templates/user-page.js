import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import UserTemplate from './Wrappers/UserTemplate'

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
