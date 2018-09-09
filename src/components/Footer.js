import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSpotify, faTwitter } from '@fortawesome/free-brands-svg-icons'
import logo from '../img/cb_logo.png'

const Footer = () => (
  <footer className="full-wrapper">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={logo} className="logo" alt="" />
          <p>Clockbeats SRL ® 2018 All Rights Reserved | P.IVA IT03995070988</p>
          <div className="footer-icons">
            <a href="/" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="/" target="_blank">
              <FontAwesomeIcon icon={faSpotify} />
            </a>
            <a href="/" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>

        <div className="col-md-8">
          <div className="row">
            <div className="col-md-3 footer-col offset-md-2">
              <p className="title">Company</p>
              <ul className="list-unstyled">
                <li>
                  <a href="/">About</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Events</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-col">
              <p className="title">Studios</p>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Brescia</a>
                </li>
                <li>
                  <a href="/">Bergamo</a>
                </li>
                <li>
                  <a href="/">Milano</a>
                </li>
                <li>
                  <a href="/">Verona</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 footer-col">
              <p className="title">Support</p>
              <ul className="list-unstyled">
                <li>
                  <a href="/">FAQ</a>
                </li>
                <li>
                  <a href="/">Contact</a>
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

export default Footer
