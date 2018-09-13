import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../FormComponents/Input'
import Dropdown from '../FormComponents/Dropdown'

class HeroForm extends Component {
  state = {
    email: '',
    service: '',
    success: false,
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
        body: this.encode({ 'form-name': formName, name, service }),
      })
        .then(() => {
          alert('Success!')
          this.setState({ email: '', service: '' })
        })
        .catch((error) => {
          alert(error)
          this.setState({ email: '', service: '' })
        });
    }
  }

  render() {
    const { dropdownOptions, unstyled, title, formName } = this.props
    const { email, service } = this.state
    if (unstyled) {
      return (
        <form className="card-body d-flex flex-column justify-content-center text-center" name={formName} data-netlify="true" onSubmit={e => this.handleSubmit(e)} data-netlify-honeypot="bot-field">
          <h2 className="form-title">{title}</h2>
          <Input type="email" value={email} placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
          <Dropdown value={service} placeholder="Select a service" dropdownOptions={dropdownOptions} onChange={e => this.setState({ service: e.target.value })} />
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
      )
    }
    return (
      <div className="card form-card f-height">
        <form className="card-body d-flex flex-column justify-content-center text-center" name={formName} data-netlify="true" onSubmit={e => this.handleOnSubmit(e)} data-netlify-honeypot="bot-field">
          <h2 className="form-title">{title}</h2>
          <Input type="email" value={email} placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
          <Dropdown value={service} placeholder="Select a service" dropdownOptions={dropdownOptions} onChange={e => this.setState({ service: e.target.value })} />
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
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
