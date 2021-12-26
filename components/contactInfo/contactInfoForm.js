import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ContactInfoForm() {
  return (
    <form>
      <div className='mb-3'>
        <div className='input-group input-group-sm'>
          <span className='input-group-text' id='name'>
            Name:
          </span>
          <input
            type={'text'}
            className='form-control'
            name='name'
            placeholder='Your name here'
            aria-label='Your name'
            aria-describedby='name'
          />
        </div>
      </div>
      <div className='mb-3'>
        <div className='input-group input-group-sm'>
          <span className='input-group-text' id='email'>
            Email:
          </span>
          <input
            type={'email'}
            className='form-control'
            name='email'
            placeholder='Your email here'
            aria-label='Your email'
            aria-describedby='email'
            rows='3'
          />
        </div>
      </div>
      <div className='mb-3'>
        <div className='input-group input-group-sm'>
          <span className='input-group-text' id='message'>
            <FontAwesomeIcon icon={faPencilAlt} className='fas' />
          </span>
          <textarea
            className='form-control'
            name='message'
            placeholder='Your message here'
            aria-label='Your message'
            aria-describedby='message'
          />
        </div>
      </div>
      <button type='submit' className='btn btn-sm btn-primary'>
        Send Message
      </button>
    </form>
  )
}

export default ContactInfoForm
