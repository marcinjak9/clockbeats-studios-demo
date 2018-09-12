import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ onChange, value, placeholder, type }) => (
  <div className={`form-group ${value ? 'typing' : ''}`}>
    <label className="absolute-label" htmlFor="from">{placeholder}</label>
    <input type={type} className="form-control" name="email" placeholder={placeholder} value={value} onChange={onChange} />
  </div>
)

Input.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input
