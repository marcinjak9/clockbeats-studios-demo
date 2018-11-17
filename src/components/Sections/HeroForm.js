import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../FormComponents/Input'
import Dropdown from '../FormComponents/Dropdown'

class HeroForm extends Component {
  state = {
    email: '',
    service: '',
  }

  encode = data => Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

  handleOnSubmit = (e) => {
    e.preventDefault()
    const { email, service } = this.state
    const { formName } = this.props
    if (email && service) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': formName, email, service }),
      })
        .then(() => {
          this.setState({ email: '', service: '' })
        })
        .catch((error) => {
          this.setState({ email: '', service: '' })
        });
    }
  }

  renderForm = () => {
    const { dropdownOptions, title, formName } = this.props
    const { email, service } = this.state
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
        <Dropdown value={service} placeholder="Select a service" dropdownOptions={dropdownOptions} onChange={e => this.setState({ service: e.target.value })} />
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
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
