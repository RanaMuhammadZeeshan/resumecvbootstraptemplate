import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ContactInfoIcon({ iconName, shrinkValue }) {
  return (
    <div className='fa-layers fa-fw fa-2x me-3'>
      <FontAwesomeIcon icon={faCircle} className='text-primary' />
      <FontAwesomeIcon
        icon={iconName}
        className='text-white'
        transform={shrinkValue}
      />
    </div>
  )
}

export default ContactInfoIcon
