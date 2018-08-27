import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children, data: { metadata: { edges } } }) => {
  const title = edges[0].node.title
  console.log(title)
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
      </Helmet>
      <Navbar />
      <div>{children()}</div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const templateWrapperQuery = graphql`
  query SiteMetadata {
    metadata:allMetadataYaml(filter:{
      dataName: { eq:"siteMetadata" }
    }) {
      edges {
        node {
          headerMeta {
            keywords
            metaDescription
            metaTitle
            ogDescription
            ogUrl
          }
        }
      }
    }
  }
`
