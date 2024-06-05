import PropTypes from 'prop-types'

const ArticleSubtitleH3 = ({ title }) => {
  return (
    <>
      <h2 className='items-center sm:items-start text-2xl font-semibold'>{title}</h2>
      <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[15%] skew-x-12 mb-16 sm:mb-8' />
    </>
  )
}
ArticleSubtitleH3.propTypes = {
  title: PropTypes.string
}

export default ArticleSubtitleH3