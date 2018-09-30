import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSpotify, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../img/cb_logo.png'

class Footer extends React.Component {
  componentDidMount() {
    (function (w, d) {
      const loader = function () {
        const s = d.createElement('script'); const
          tag = d.getElementsByTagName('script')[0]; s.src = 'https://cdn.iubenda.com/iubenda.js'; tag.parentNode.insertBefore(s, tag);
      }; if (w.addEventListener) { w.addEventListener('load', loader, false); } else if (w.attachEvent) { w.attachEvent('onload', loader); } else { w.onload = loader; }
    }(window, document))
  }

  render() {
    return (
      <footer className="full-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src={logo} className="logo" alt="" />
              <p>
                Clockbeats SRL ® 2018 All Rights Reserved
                <br />
                P.IVA IT03995070988

              </p>
              <div className="footer-icons">
                <a href="https://facebook.com/clockbeats" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://instagram.com/clockbeats_official" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                {/* <a href="/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSpotify} />
            </a> */}
                <a href="https://twitter.com/clockbeats" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://linkedin.com/company/clock-beats" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </div>

            <div className="col-md-8">
              <div className="row">
                <div className="col-md-3 footer-col offset-md-2">
                  <p className="title">Company</p>
                  <ul className="list-unstyled">
                    <li>
                      <a href="https://blog.clockbeats.com/about" target="_blank" rel="noopener noreferrer">About</a>
                    </li>
                    <li>
                      <a href="https://blog.clockbeats.com/team" target="_blank" rel="noopener noreferrer">Team</a>
                    </li>
                    <li>
                      <a href="https://blog.clockbeats.com/" target="_blank" rel="noopener noreferrer">Blog</a>
                    </li>
                    <li>
                      <a href="https://store.clockbeats.com" target="_blank" rel="noopener noreferrer">Store</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 footer-col">
                  <p className="title">Studios</p>
                  <ul className="list-unstyled">
                    <li>
                      Brescia
                    </li>
                    <li>
                      Bergamo
                    </li>
                    <li>
                      Milano
                    </li>
                    <li>
                      <a href="https://blog.clockbeats.com/studios" className="brand-text" target="_blank" rel="noopener noreferrer">Many more</a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 footer-col">
                  <p className="title">Support</p>
                  <ul className="list-unstyled">
                    <li>
                      <a href="http://support.clockbeats.com" target="_blank" rel="noopener noreferrer">FAQ</a>
                    </li>
                    <li>
                      <a href="/" target="_blank" rel="noopener noreferrer">Contact</a>
                    </li>
                    <li style={{ marginTop: 10 }}>
                      <a href="https://www.iubenda.com/privacy-policy/29112863" className="iubenda-nostyle no-brand iubenda-embed " title="Privacy Policy">Privacy Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center credits justify-content-center">
            <p>
              Made with
              {'  '}
              <span role="img" aria-label="Heart">❤️</span>
              {' '}
              by
              {' '}
              <a href="https://marcinjakubik.io" target="_blank" rel="noopener noreferrer">Marcin Jakubik</a>
            </p>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
