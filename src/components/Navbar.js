import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { CSSTransitionGroup } from 'react-transition-group'
import logo from '../img/cb_logo.png'

class Navbar extends React.Component {
  state = {
    visible: false,
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.props)
  }


  triggerMenu = (e) => {
    e.preventDefault()
    const { visible } = this.state
    this.setState({ visible: !visible })
  }

  render() {
    const { visible } = this.state
    return (

      <nav className="clb-nav">
        <div className="container nav-inner">
          <Link to="/">
            <img src={logo} alt="" className="logo" />
          </Link>

          <button type="button" className="d-flex align-items-center menu-button" onClick={this.triggerMenu}>
            <div className="menu-text brand-text">MENU</div>
            {!visible && <FontAwesomeIcon icon={faBars} />}
            {visible && <FontAwesomeIcon icon={faTimes} />}
          </button>
        </div>
        {visible
          && (
            <CSSTransitionGroup
              transitionName="nav-transition"
              transitionAppear
              transitionAppearTimeout={500}
              transitionLeave
              transitionLeaveTimeout={500}
            >
              <div className="nav-full">
                <div className="row">
                  <div className="col-md-6 d-flex flex-column justify-content-center motivational">
                    <h2>
                      We create
                      {' '}
                      <strong>artists</strong>
                      {' '}
                      and their
                      {' '}
                      <strong>future</strong>
                      .
                    </h2>
                  </div>
                  <div className="col-md-6 nav-container d-flex flex-column justify-content-center align-center">
                    <ul className="text-center">
                      <li>
                        <Link to="/" onClick={() => this.setState({ visible: false })}>
                          Home
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/services" onClick={() => this.setState({ visible: false })}>
                          Services
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                      </li>
                      <li>
                        <Link to="/community" onClick={() => this.setState({ visible: false })}>
                          Community
                          <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                      </li>
                      <li>
                        <a href="https://blog.clockbeats.com">
                          Blog
                          <FontAwesomeIcon icon={faAngleRight} />
                        </a>
                      </li>
                      <li>
                        <a href="https://clockbeats.com">
                          Platform
                          <FontAwesomeIcon icon={faAngleRight} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CSSTransitionGroup>
          )}
      </nav>
    )
  }
}

export default Navbar
