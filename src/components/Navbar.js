import React from 'react'
import Link from 'gatsby-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import github from '../img/github-icon.svg'
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

          <a className="d-flex align-items-center menu-button" onClick={this.triggerMenu}>
            <div className="menu-text brand-text">MENU</div>
            {!visible && <FontAwesomeIcon icon={faBars} />}
            {visible && <FontAwesomeIcon icon={faTimes} />}
          </a>
        </div>
        {visible
          && (
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
                      <Link to="/">
                        Home
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Services
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Artists
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Blog
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        Platform
                        <FontAwesomeIcon icon={faAngleRight} />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
      </nav>
    )
  }
}

export default Navbar
