import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'

class TemplateWrapper extends Component {
  componentDidMount() {
    window.intercomSettings = {
      app_id: 'b0lddnu1',
    };
    (function () { var w = window; var ic = w.Intercom; if (typeof ic === "function") { ic('reattach_activator'); ic('update', intercomSettings); } else { var d = document; var i = function () { i.c(arguments) }; i.q = []; i.c = function (args) { i.q.push(args) }; w.Intercom = i; function l() { var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://widget.intercom.io/widget/b0lddnu1'; var x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); } if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } } })()  // eslint-disable-line
  }

  render() {
    const { children } = this.props
    return (
      <div style={{ position: 'relative' }}>
        <Helmet>
          <title>Clockbeats Studio</title>
          <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js" />
          <link rel="icon" href="https://i1.wp.com/store.clockbeats.com/wp-content/uploads/2016/09/cb_logo_icon.png?fit=32%2C32&amp;ssl=1" sizes="32x32" />
        </Helmet>
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    )
  }
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
