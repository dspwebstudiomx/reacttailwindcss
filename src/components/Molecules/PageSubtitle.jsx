import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import PropTypes from 'prop-types'

const PageSubtitle = ({ number, subtitle, className }) => {
  return (
    <div className={className}>
      <h2 className='sm:flex text-xl font-bold gap-0 items-center hidden mb-6'>
        <MdKeyboardDoubleArrowRight className='text-blue-500' size={28} />
        <div>
          <span className='font-bold text-blue-700 mr-2'>{number}</span>
          {subtitle}
        </div>
      </h2>
    </div>
  )
}
PageSubtitle.propTypes = {
  number: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
}

export default PageSubtitle