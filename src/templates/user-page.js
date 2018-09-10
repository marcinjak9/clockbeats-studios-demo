import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'
import UserHeader from '../components/Home/UserHeader'
import HomeFeatures from '../components/Home/HomeFeatures'
import LatestNewsSection from '../components/Home/LatestNewsSection'
import InstagramSection from '../components/Home/InstagramSection'
import ServiceBody from '../components/ServiceBody'

export const UserTemplate = props => (
  <div>
    <UserHeader
      title="Jon Doe"
      payoff="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas adipisci quod voluptatem amet fugit assumenda ipsa dolore iusto repellendus nesciunt deserunt a saepe doloribus, aut est harum, necessitatibus ullam debitis!"
      backgroundImage="https://source.unsplash.com/collection/2068121/1920x1080"
    />

    <ServiceBody />

    <LatestNewsSection
      title="Scopri di piu"
      tag="tutorial"
    />

    <InstagramSection />
  </div>
)

UserTemplate.propTypes = {
}

const UserPage = props => (
  <UserTemplate
    {...props}
  // contentComponent={HTMLContent}
  // title={post.frontmatter.title}
  // content={post.html}
  />
)

UserPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default UserPage
