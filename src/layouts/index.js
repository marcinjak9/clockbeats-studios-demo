import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div style={{ position: 'relative' }}>
    <Helmet>
      <title>Clockbeats Brescia</title>
      <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
    </Helmet>
    <Navbar />
    <div>{children()}</div>
    <Footer />
  </div>
)


TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

// export const templateWrapperQuery = graphql`
//   query SiteMetadata {
//     metadata:allMetadataYaml(filter:{
//       dataName: { eq:"siteMetadata" }
//     }) {
//       edges {
//         node {
//           headerMeta {
//             keywords
//             metaDescription
//             metaTitle
//             ogDescription
//             ogUrl
//           }
//         }
//       }
//     }
//   }
// `
