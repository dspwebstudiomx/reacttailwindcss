
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import Spacing from '../Sections/Spacing'
import PropTypes from 'prop-types'

const ArticleSubtitle = ({ subtitle }) => {
  return (
    <>
      <Spacing distance={'mb-12'} />
      <h2 className='text-2xl font-bold flex'>
        <MdOutlineKeyboardDoubleArrowRight className='text-blue-500 mt-[5px] sm:mt-[6px]' />
        <span className='animate__animated animate__fadeIn animate__slow'>{subtitle}</span>
      </h2><br />
    </>
  )
}
ArticleSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
}

export default ArticleSubtitle