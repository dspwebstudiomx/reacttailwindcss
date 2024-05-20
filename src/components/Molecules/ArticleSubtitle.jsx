
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import Spacing from '../Sections/Spacing'
import PropTypes from 'prop-types'

const ArticleSubtitle = ({ subtitle, number }) => {
  return (
    <>
      <Spacing distance={'mb-16'} />
      <h2 className='text-2xl font-bold flex'>
        <MdOutlineKeyboardDoubleArrowRight className='text-blue-500 mt-[5px] sm:mt-[6px]' />
        <div className='animate__animated animate__fadeIn animate__slow'>
          <span className='mr-2'>{number}</span>
          <span>{subtitle}</span>
        </div>
      </h2><br />
    </>
  )
}
ArticleSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
  number: PropTypes.string,
}
export default ArticleSubtitle