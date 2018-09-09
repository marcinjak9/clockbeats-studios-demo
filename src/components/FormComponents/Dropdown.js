import React from 'react'
import PropTypes from 'prop-types'

const Dropdown = (props) => {
  const {
    onChange, value, placeholder, dropdownOptions,
  } = props
  return (
    <div className={`form-group ${value ? 'typing' : ''}`}>
      <div className="form-group">
        <select className="form-control" name="ciao" value={value || placeholder} onChange={onChange}>
          <option value={placeholder} disabled>{placeholder}</option>
          {dropdownOptions.map(item => <option key={item.HeroCtaServicesItem}>{item.HeroCtaServicesItem}</option>)}
        </select>
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  dropdownOptions: PropTypes.arrayOf(PropTypes.shape({
    HeroCtaServicesItem: PropTypes.string,
  })),
}

export default Dropdown
