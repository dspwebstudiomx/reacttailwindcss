import PropTypes from "prop-types"

const Line = ({ width, align }) => {
  return (
    <hr className={`h-1 bg-gradient-to-r from-cyan-500 to-blue-500 ${width} skew-x-[45deg] ${align} mt-2`} />
  )
}
Line.propTypes = {
  width: PropTypes.string.isRequired,
  align: PropTypes.string,
}

export default Line