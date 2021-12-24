import {
  faApple,
  faDropbox,
  faFacebook,
  faGoogle,
  faMedium,
  faUber,
} from '@fortawesome/free-brands-svg-icons'
import {
  faGraduationCap,
  faUniversity,
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import MainCard from '../components/cards/maincard'
import WorkExperienceEducation from '../components/cards/workExperienceEducation'

export default function Home() {
  const [workExperience, setWorkExperience] = useState([
    {
      iconName: faFacebook,
      skillName: 'Frontend Developer ',
      iconNameText: 'Facebook',
    },
    {
      iconName: faApple,
      skillName: 'Art Director',
      iconNameText: 'Apple',
    },
    {
      iconName: faDropbox,
      skillName: 'User Experience Designer',
      iconNameText: 'Dropbox',
    },
    {
      iconName: faMedium,
      skillName: 'Copywriter',
      iconNameText: 'Medium',
    },
    {
      iconName: faGoogle,
      skillName: 'Search Engine Optimization',
      iconNameText: 'Google',
    },
    {
      iconName: faUber,
      skillName: 'AI Engineer',
      iconNameText: 'Uber',
    },
  ])

  const [education, setEducation] = useState([
    {
      iconName: faUniversity,
      skillName: 'BS In Software Engineering',
      iconNameText: 'University Name',
    },
    {
      iconName: faUniversity,
      skillName: 'High School',
      iconNameText: 'High School Name',
    },
    {
      iconName: faUniversity,
      skillName: 'Secondary School',
      iconNameText: 'Secondary School Name',
    },
    {
      iconName: faGraduationCap,
      skillName: 'Information Technology',
      iconNameText: 'College Name',
    },
    {
      iconName: faGraduationCap,
      skillName: 'Science and Technology',
      iconNameText: 'School Name',
    },
  ])

  return (
    <main className='bg-light'>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-12 col-lg-8 '>
            <MainCard />
            <WorkExperienceEducation
              sectionName={'Work Experience'}
              workExperienceAndEducation={workExperience}
            />
            <WorkExperienceEducation
              sectionName={'Education'}
              workExperienceAndEducation={education}
            />
          </div>
        </div>
      </div>
    </main>
  )
}
