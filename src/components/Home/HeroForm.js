import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from '../FormComponents/Input'
import Dropdown from '../FormComponents/Dropdown'

class HeroForm extends Component {
  state = {
    email: '',
    service: '',
  }

  render() {
    const { dropdownOptions } = this.props
    const { email, service } = this.state
    return (
      <form className="card form-card f-height">
        <div className="card-body d-flex flex-column justify-content-center text-center">
          <h2 className="form-title">Lorem ipsum dolor set morts eres</h2>
          <Input type="email" value={email} placeholder="Email" onChange={e => this.setState({ email: e.target.value })} />
          <Dropdown value={service} placeholder="Select a service" dropdownOptions={dropdownOptions} onChange={e => this.setState({ service: e.target.value })} />
          <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </div>
      </form>
    )
  }
}

HeroForm.propTypes = {
  dropdownOptions: PropTypes.arrayOf(PropTypes.shape({
    HeroCtaServicesItem: PropTypes.string,
  })),
}

export default HeroForm
