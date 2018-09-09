import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/cb_logo.png'

const Navbar = () => (
  <nav className="navbar is-dark is-fixed-top">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <figure className="image">
            <img src={logo} alt="Kaldi" style={{ height: '50px', width: 'auto' }} />
          </figure>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/services">
          Services
        </Link>
        <Link className="navbar-item" to="/community">
          Community
        </Link>
        <a className="navbar-item" href="https://blog.clockbeats.com">
          Blog
        </a>
        <a className="navbar-item" href="https://clockbeats.com">
          Portal
        </a>
      </div>
      <div className="navbar-end">

      </div>
    </div>
  </nav>
)

export default Navbar
