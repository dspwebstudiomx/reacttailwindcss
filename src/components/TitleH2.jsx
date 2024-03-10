import PropTypes from 'prop-types'


const TitleH2 = ({ title }) => {
  return (
    <>
      <h2 className="text-3xl mt-1 mb-2 text-center" >{title}</h2>
      <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[12%] skew-x-12 mb-8 mx-auto text-center' />
    </>
  )
}
TitleH2.propTypes = {
  title: PropTypes.string.isRequired
}

export default TitleH2