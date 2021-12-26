import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SkillsBar({ iconName, skillName, valueNow, minValue, maxValue }) {
  return (
    <>
      <h4 className='h6 text-muted'>
        <FontAwesomeIcon icon={iconName} className='fab fa-fw' />
        {skillName}
      </h4>
      <div className='progress mb-3'>
        <div
          className={`progress-bar bg-secondary w-${valueNow}`}
          role='pregressbar'
          aria-valuenow={valueNow}
          aria-valuemin={maxValue}
          aria-valuemax={minValue}
        ></div>
      </div>
    </>
  )
}

export default SkillsBar
