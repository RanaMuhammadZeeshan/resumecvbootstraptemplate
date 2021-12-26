import {
  faAngular,
  faBehance,
  faCodepen,
  faCss3,
  faDribbble,
  faFlickr,
  faGithub,
  faHtml5,
  faInstagram,
  faJs,
  faLinkedin,
  faNodeJs,
  faNpm,
  faReact,
  faSkype,
  faStackOverflow,
  faTwitter,
  faVimeo,
  faWhatsapp,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'
import {
  faAt,
  faCalendar,
  faCalendarAlt,
  faCode,
  faEnvelope,
  faHome,
  faImages,
  faMale,
  faPaintBrush,
  faPencilAlt,
  faPhone,
  faVideo,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'
import SkillsBar from '../skills/skillsBar'
import ContactInfoForm from './contactInfoForm'
import ContactInfoIcon from './contactInfoIcon'

function ContactInfo() {
  const [contact, setContact] = useState([
    {
      iconName: faPhone,
      linkTo: '+1234567890',
      linkText: '+1234567890',
    },
    {
      iconName: faSkype,
      linkTo: 'skype_user',
      linkText: 'Skype_User',
    },
    {
      iconName: faWhatsapp,
      linkTo: 'whatsapp_user',
      linkText: 'Whatsapp_User',
    },
  ])

  return (
    <>
      <div className='card mb-4'>
        <h2 className='card-header text-center'>Contact Info</h2>
        <div className='card-body'>
          <div className='d-flex align-items-start'>
            <ContactInfoIcon iconName={faMale} shrinkValue={'shrink-5'} />
            <div className='flex-grow-1'>
              Firstname Lastname
              <hr />
            </div>
          </div>
          <div className='d-flex align-items-start'>
            <ContactInfoIcon
              iconName={faCalendarAlt}
              shrinkValue={'shrink-8'}
            />
            <div className='flex-grow-1'>
              <time dateTime='1199-01-01'>1st of January 1199</time>
              <hr />
            </div>
          </div>
          <div className='d-flex align-items-start'>
            <ContactInfoIcon iconName={faPhone} shrinkValue={'shrink-8'} />
            <ul className='flex-grow-1 list-unstyled'>
              <li>
                <Link href={'tel:+1234567890'}>
                  <a>(123)-456-7890</a>
                </Link>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faSkype}
                  className='text-muted fa-fw fab'
                />
                <Link href={'#0'}>
                  <a>Skype_User</a>
                </Link>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className='text-muted fa-fw fab'
                />
                <Link href={'#0'}>
                  <a>Whatsapp_User</a>
                </Link>
              </li>
              <li>
                <hr />
              </li>
            </ul>
          </div>

          <div className='d-flex align-items-start'>
            <ContactInfoIcon iconName={faEnvelope} shrinkValue={'shrink-8'} />
            <ul className='flex-grow-1 list-unstyled'>
              <li>
                <Link href={'mailto:mail@domain.com'}>
                  <a>mail@domain.com</a>
                </Link>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className='text-muted fa-fw fab'
                />
                <Link href={'#0'}>
                  <a>LinkedIn</a>
                </Link>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className='text-muted fa-fw fab'
                />
                <Link href={'#0'}>
                  <a>Twitter_User</a>
                </Link>
              </li>
              <li>
                <hr />
              </li>
            </ul>
          </div>

          <div className='d-flex align-items-start'>
            <ContactInfoIcon iconName={faHome} shrinkValue={'shrink-8'} />
            <div className='flex-grow-1 list-unstyled'>
              <address className='mb-0'>
                Street Address
                <br /> City
                <br /> State
                <br /> Zip
              </address>
              <hr />
            </div>
          </div>

          <div className='d-flex align-items-start'>
            <ContactInfoIcon iconName={faAt} shrinkValue={'shrink-8'} />
            <div className='flex-grow-1 list-unstyled'>
              <ContactInfoForm />
            </div>
          </div>
        </div>
      </div>

      <div className='card mb-4'>
        <h2 className='card-header text-center'>Portfolio</h2>
        <div className='card-body'>
          <div className='d-flex align-items-start'>
            <ContactInfoIcon iconName={faCode} shrinkValue={'shrink-8'} />
            <ul className='flex-grow-1 list-unstyled'>
              <li>
                <Link href={'#0'}>
                  <a>
                    <FontAwesomeIcon
                      icon={faGithub}
                      className='fab fa-fw text-muted'
                    />
                    Github
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'#0'}>
                  <a>
                    <FontAwesomeIcon
                      icon={faCodepen}
                      className='fab fa-fw text-muted'
                    />
                    Codepen
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'#0'}>
                  <a>
                    <FontAwesomeIcon
                      icon={faStackOverflow}
                      className='fab fa-fw text-muted'
                    />
                    StackOverflow
                  </a>
                </Link>
              </li>
              <li>
                <hr />
              </li>
            </ul>
          </div>

          <div className='d-flex align-items-start'>
            <ContactInfoIcon iconName={faPaintBrush} shrinkValue={'shrink-8'} />
            <ul className='flex-grow-1 list-unstyled'>
              <li>
                <Link href={'#0'}>
                  <a>
                    <FontAwesomeIcon
                      icon={faBehance}
                      className='fab fa-fw text-muted'
                    />
                    Behance
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'#0'}>
                  <a>
                    <FontAwesomeIcon
                      icon={faDribbble}
                      className='fab fa-fw text-muted'
                    />
                    Dribble
                  </a>
                </Link>
              </li>
              <li>
                <hr />
              </li>
            </ul>
          </div>

          <div className='d-flex align-items-start'>
            <ContactInfoIcon iconName={faImages} shrinkValue={'shrink-8'} />
            <ul className='flex-grow-1 list-unstyled'>
              <li>
                <Link href={'#0'}>
                  <a>
                    <FontAwesomeIcon
                      icon={faFlickr}
                      className='fab fa-fw text-muted'
                    />
                    Flickr
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'#0'}>
                  <a>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className='fab fa-fw text-muted'
                    />
                    Instagram
                  </a>
                </Link>
              </li>
              <li>
                <hr />
              </li>
            </ul>
          </div>

          <div className='d-flex align-items-start'>
            <ContactInfoIcon iconName={faVideo} shrinkValue={'shrink-8'} />
            <ul className='flex-grow-1 list-unstyled'>
              <li>
                <Link href={'#0'}>
                  <a>
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className='fab fa-fw text-muted'
                    />
                    Youtube
                  </a>
                </Link>
              </li>
              <li>
                <Link href={'#0'}>
                  <a>
                    <FontAwesomeIcon
                      icon={faVimeo}
                      className='fab fa-fw text-muted'
                    />
                    Vimeo
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className='card mb-4'>
        <h2 className='card-header text-center'>Skills</h2>
        <div className='card-body'>
          <div className='mb-3'>
            <h3 className='h5 mb-3'>Coding Languages</h3>
            <SkillsBar
              iconName={faHtml5}
              skillName={'Html5'}
              valueNow='100'
              minValue='0'
              maxValue='100'
            />
            <SkillsBar
              iconName={faCss3}
              skillName={'Css3'}
              valueNow='75'
              minValue='0'
              maxValue='100'
            />
            <SkillsBar
              iconName={faJs}
              skillName={'JavaScript'}
              valueNow='75'
              minValue='0'
              maxValue='100'
            />
          </div>
          <div className='mb-3'>
            <h3 className='h5 mb-3'>Frontend Frameworks</h3>
            <SkillsBar
              iconName={faReact}
              skillName={'Reactjs'}
              valueNow='75'
              minValue='0'
              maxValue='100'
            />
            <SkillsBar
              iconName={faAngular}
              skillName={'Angukar'}
              valueNow='25'
              minValue='0'
              maxValue='100'
            />
          </div>

          <div className='mb-3'>
            <h3 className='h5 mb-3'>Backend Frameworks</h3>
            <SkillsBar
              iconName={faNodeJs}
              skillName={'nodejs'}
              valueNow='75'
              minValue='0'
              maxValue='100'
            />
          </div>

          <div className='mb-3'>
            <h3 className='h5 mb-3'>Tools</h3>
            <SkillsBar
              iconName={faCode}
              skillName={'VS Code'}
              valueNow='75'
              minValue='0'
              maxValue='100'
            />
            <SkillsBar
              iconName={faNpm}
              skillName={'NPM'}
              valueNow='75'
              minValue='0'
              maxValue='100'
            />
            <SkillsBar
              iconName={faGithub}
              skillName={'Github'}
              valueNow='50'
              minValue='0'
              maxValue='100'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactInfo
