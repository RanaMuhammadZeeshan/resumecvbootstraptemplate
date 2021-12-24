import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function WorkExperienceEducationCardBody({
  iconName,
  skillName,
  iconNameText,
}) {
  return (
    <div>
      <div className='d-flex align-items-start mb-2'>
        <FontAwesomeIcon
          icon={iconName}
          className='fa-fw fa-3x text-primary me-2'
        />
        <div className='flex-grow-1'>
          <h3 className='h4 mb-3 '>{skillName}</h3>
          <div className='d-sm-flex justify-content-sm-between align-items-sm-baseline'>
            <h5 className='mb-0'>
              <Link href={'/#0'}>
                <a className='text-decoration-none'>{iconNameText}</a>
              </Link>
            </h5>
            <small className='text-uppercase fw-bold text-muted'>
              <time dateTime='2021-24'>December 2021</time>
              &ndash; <time dateTime='2021-01'>January 2021</time>
            </small>
          </div>
        </div>
      </div>
      <p className='card-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus orci
        massa, maximus a velit sit amet, fringilla convallis tellus.
      </p>
      <hr />
    </div>
  )
}

export default WorkExperienceEducationCardBody
