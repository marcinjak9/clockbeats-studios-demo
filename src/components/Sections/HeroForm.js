import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../FormComponents/Input'
import Dropdown from '../FormComponents/Dropdown'

class HeroForm extends Component {
  state = {
    email: '',
    service: '',
    privacy: false,
    marketing: false,
    emailError: null,
    serviceError: null,
    privacyError: null,
    genericError: null,
    completed: false,
  }

  encode = data => Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

  handleOnSubmit = (e) => {
    e.preventDefault()
    const { email, service, marketing, privacy } = this.state
    const { formName } = this.props
    if (email && service && privacy) {
      if (marketing) {
        fetch(`https://clockbeats.us11.list-manage.com/subscribe/post-json?u=0fb55229378ab16d5a9c3aec3&amp;id=bcfb8dd036&EMAIL=${email}`, {
          method: 'GET',
          mode: 'no-cors',
        })
      }
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': formName, email, service }),
      })
        .then(() => {
          this.setState({ email: '', service: '', completed: true })
        })
        .catch((error) => {
          this.setState({ email: '', service: '', genericError: 'something went wrong' })
        });
    }
    if (!email) {
      this.setState({ emailError: 'Your email is required' })
    }
    if (!service) {
      this.setState({ serviceError: 'You need to chose the type of service you are interested in' })
    }
    if (!privacy) {
      this.setState({ privacyError: 'You need to agree our privacy policy' })
    }
  }

  renderForm = () => {
    const { dropdownOptions, title, formName } = this.props
    const {
      email, service, privacy, marketing,
      emailError, serviceError, privacyError, genericError,
      completed,
    } = this.state
    if (completed) {
      return (
        <div className="card-body">
          <h2 className="form-title">
            <span role="img" aria-label="gratitude">🙏🏼</span>
            {' '}
            Thank you for your submission, we'll let you know
          </h2>
          <p>
            <span role="img" aria-label="rocket">🚀</span>
            {' '}
            In the meantime you can visit our
            {' '}
            <a href="/services">Services</a>
            {' '}
            page
          </p>
          <p>Or contact us via Chat or find support</p>
          <button
            type="button"
            onClick={() => window.Intercom('show')}
            className="btn btn-primary btn-block"
          >
            Start Chat

          </button>
          <small className="mt-4 d-block">
            - With
            {' '}
            <span role="img" aria-label="love">❤️</span>
            {' '}
            ️Clockbeats Staff
          </small>
        </div>
      )
    }
    return (
      <form
        className="card-body d-flex flex-column justify-content-center text-center"
        name={formName}
        data-netlify="true"
        onSubmit={this.handleOnSubmit}
        data-netlify-honeypot="bot-field"
      >
        <h2 className="form-title">{title}</h2>
        <Input type="email" value={email} placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
        {emailError && <small className="error">{emailError}</small>}
        <Dropdown value={service} placeholder="Select a service" dropdownOptions={dropdownOptions} onChange={e => this.setState({ service: e.target.value })} />
        {serviceError && <small className="error">{serviceError}</small>}
        <div className="checkbox-container">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={privacy}
              onChange={() => this.setState(prevState => ({ privacy: !prevState.privacy }))}
              id="privacy"
            />
            <label className="form-check-label" htmlFor="privacy">
              I have read and agree to the
              {' '}
              <a href="https://clockbeats.com/terms/" target="_blank" rel="noopener noreferrer">Terms</a>
            </label>
          </div>
          {privacyError && <small className="error">{privacyError}</small>}
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value={marketing}
              onChange={() => this.setState(prevState => ({ marketing: !prevState.marketing }))}
              id="marketing"
            />
            <label className="form-check-label" htmlFor="marketing">
              I want to receive updates about Clockbeats
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        <p className="mt-3">
          <span role="img" aria-label="rock">🤟🏼</span>
          Don
          {"'"}
          t wait, chat now!
          {' '}
          <span role="img" aria-label="point-down">👇🏽</span>
        </p>
        <button
          type="button"
          onClick={() => window.Intercom('show')}
          className="btn btn-outline-secondary btn-block"
        >
          Start Chat

        </button>
      </form>
    )
  }

  render() {
    const { unstyled } = this.props
    if (unstyled) {
      return this.renderForm()
    }
    return (
      <div className="card form-card f-height">
        {this.renderForm()}
      </div>
    )
  }
}

HeroForm.propTypes = {
  unstyled: PropTypes.bool,
  title: PropTypes.string,
  dropdownOptions: PropTypes.arrayOf(PropTypes.shape({
    HeroCtaServicesItem: PropTypes.string,
  })),
  formName: PropTypes.string,
}

export default HeroForm
