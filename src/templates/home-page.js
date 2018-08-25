import React from 'react'
import PropTypes from 'prop-types'
import Content, { HTMLContent } from '../components/Content'

export const HomePageTemplate = () => {
  return (
    <section className="section section--gradient">
      lol
    </section>
  )
}

HomePageTemplate.propTypes = {
}

const HomePage = () => {
  return (
    <HomePageTemplate
      // contentComponent={HTMLContent}
      // title={post.frontmatter.title}
      // content={post.html}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default HomePage

// export const homePageQuery = graphql`
//   query AboutPage($id: String!) {
//     markdownRemark(id: { eq: $id }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `
