import PropTypes from 'prop-types'

const Line = ({ width }) => {
  return (
    <hr className={`h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-${width} skew-x-12 mx-auto text-center mt-4`} />
  )
}
Line.propTypes = {
  width: PropTypes.number.isRequired
}

export default Line