import PropTypes from 'prop-types'


const TitleH2 = ({ title }) => {
  return (
    <div className=''>
      <h2 className="text-4xl text-center mb-2" >{title}</h2>
    </div>
  )
}
TitleH2.propTypes = {
  title: PropTypes.string.isRequired
}
export default TitleH2