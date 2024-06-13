import PropTypes from 'prop-types'


const TitleH2 = ({ title, align }) => {
  return (
    <div className={`flex justify-center flex-col ${align}`}>
      <h2 className='text-3xl dark:text-white text-slate-950 mb-2  font-semibold' >{title}</h2>
      <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[15%] skew-x-12 mb-16 sm:mb-12' />
    </div>
  )
}
TitleH2.propTypes = {
  title: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
}
export default TitleH2