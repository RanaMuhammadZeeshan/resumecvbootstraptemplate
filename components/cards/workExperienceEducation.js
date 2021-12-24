import { useEffect, useState } from 'react'
import WorkExperienceEducationCardBody from './workExperienceEducationCardBody'

function WorkExperienceEducation({ sectionName, workExperienceAndEducation }) {
  const [buttonToggleWork, setButtonToggleWork] = useState(false)
  const [buttonToggleEducation, setButtonToggleEducation] = useState(false)

  const showAllContentWork = () => {
    setButtonToggleWork(!buttonToggleWork)
  }

  const showAllContentEducation = () => {
    setButtonToggleEducation(!buttonToggleEducation)
  }

  return (
    <div className='card mb-4'>
      <h2 className='card-header text-center'>{sectionName}</h2>
      <div className='card-body'>
        <WorkExperienceEducationCardBody
          iconName={workExperienceAndEducation[0].iconName}
          skillName={workExperienceAndEducation[0].skillName}
          iconNameText={workExperienceAndEducation[0].iconNameText}
        />

        <WorkExperienceEducationCardBody
          iconName={workExperienceAndEducation[1].iconName}
          skillName={workExperienceAndEducation[1].skillName}
          iconNameText={workExperienceAndEducation[1].iconNameText}
        />

        <WorkExperienceEducationCardBody
          iconName={workExperienceAndEducation[2].iconName}
          skillName={workExperienceAndEducation[2].skillName}
          iconNameText={workExperienceAndEducation[2].iconNameText}
        />
        <div
          className='collapse'
          id={`${
            sectionName === 'Work Experience'
              ? 'collapse-work'
              : 'collapse-education'
          }`}
        >
          <WorkExperienceEducationCardBody
            iconName={workExperienceAndEducation[3].iconName}
            skillName={workExperienceAndEducation[3].skillName}
            iconNameText={workExperienceAndEducation[3].iconNameText}
          />

          <WorkExperienceEducationCardBody
            iconName={workExperienceAndEducation[4].iconName}
            skillName={workExperienceAndEducation[4].skillName}
            iconNameText={workExperienceAndEducation[4].iconNameText}
          />

          <WorkExperienceEducationCardBody
            iconName={workExperienceAndEducation[5].iconName}
            skillName={workExperienceAndEducation[5].skillName}
            iconNameText={workExperienceAndEducation[5].iconNameText}
          />
        </div>
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
