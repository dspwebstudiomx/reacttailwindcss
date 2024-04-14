
// import { MdKeyboardDoubleArrowRight } from 'react-icons/md'
import PropTypes from 'prop-types'

const PageSubtitle = ({ number, subtitle, className }) => {
  return (
    <div className={className}>
      <h2 className='sm:flex text-xl font-bold gap-2 items-center hidden'>
        <div>
          <span className='font-bold text-blue-700 mr-2'>{number}</span>
          {subtitle}
        </div>
        {/* <MdKeyboardDoubleArrowRight className='text-blue-500' size={28} /> */}
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