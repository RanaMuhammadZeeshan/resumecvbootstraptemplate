import { useState } from 'react'
import WorkExperienceEducationCardBody from './workExperienceEducationCardBody'

function WorkExperienceEducation({ sectionName, workExperienceAndEducation }) {
  const [buttonToggleWork, setButtonToggleWork] = useState(false)
  const [buttonToggleEducation, setButtonToggleEducation] = useState(false)
  let testfirst3 = []
  let testRest = []

  const showAllContentWork = () => {
    setButtonToggleWork(!buttonToggleWork)
  }

  const showAllContentEducation = () => {
    setButtonToggleEducation(!buttonToggleEducation)
  }

  const renderWorkExperienceAndEducation = () => {
    for (let i = 0; i < workExperienceAndEducation.length; i++) {
      if (i <= 2) {
        testfirst3.push(
          <WorkExperienceEducationCardBody
            iconName={workExperienceAndEducation[i].iconName}
            skillName={workExperienceAndEducation[i].skillName}
            iconNameText={workExperienceAndEducation[i].iconNameText}
          />
        )
      } else {
        testRest.push(
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
            {testfirst3.map((item, index) => (
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
              {testRest.map((item, index) => (
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
