import { useState } from 'react'
import WorkExperienceEducationCardBody from './workExperienceEducationCardBody'

function WorkExperienceEducation({ sectionName, workExperienceAndEducation }) {
  const [buttonToggleWork, setButtonToggleWork] = useState(false)
  const [buttonToggleEducation, setButtonToggleEducation] = useState(false)
  let first3 = []
  let rest = []

  const showAllContentWork = () => {
    setButtonToggleWork(!buttonToggleWork)
  }

  const showAllContentEducation = () => {
    setButtonToggleEducation(!buttonToggleEducation)
  }

  const renderWorkExperienceAndEducation = () => {
    for (let i = 0; i < workExperienceAndEducation.length; i++) {
      if (i <= 2) {
        first3.push(
          <WorkExperienceEducationCardBody
            iconName={workExperienceAndEducation[i].iconName}
            skillName={workExperienceAndEducation[i].skillName}
            iconNameText={workExperienceAndEducation[i].iconNameText}
          />
        )
      } else {
        rest.push(
          <WorkExperienceEducationCardBody
            iconName={workExperienceAndEducation[i].iconName}
            skillName={workExperienceAndEducation[i].skillName}
            iconNameText={workExperienceAndEducation[i].iconNameText}
          />
        )
      }
    }
  }

  return (
    <div className='card mb-4'>
      <h2 className='card-header text-center'>{sectionName}</h2>
      <div className='card-body'>
        {renderWorkExperienceAndEducation()}
        {
          <>
            {first3.map((item, index) => (
              <div key={index}>{item}</div>
            ))}

            <div
              className='collapse'
              id={`${
                sectionName === 'Work Experience'
                  ? 'collapse-work'
                  : 'collapse-education'
              }`}
            >
              {rest.map((item, index) => (
                <div key={index}>{item}</div>
              ))}
            </div>
          </>
        }

        {sectionName === 'Work Experience' ? (
          <button
            className='btn btn-sm btn-outline-primary'
            data-bs-toggle='collapse'
            data-bs-target='#collapse-work'
            aria-expanded='false'
            aria-controls='collapse-work'
            onClick={() => showAllContentWork()}
          >
            {buttonToggleWork ? 'Hide' : 'Show'} All
          </button>
        ) : (
          <button
            className='btn btn-sm btn-outline-primary'
            data-bs-toggle='collapse'
            data-bs-target='#collapse-education'
            aria-expanded='false'
            aria-controls='collapse-work'
            onClick={() => showAllContentEducation()}
          >
            {buttonToggleEducation ? 'Hide' : 'Show'} All
          </button>
        )}
      </div>
    </div>
  )
}

export default WorkExperienceEducation
