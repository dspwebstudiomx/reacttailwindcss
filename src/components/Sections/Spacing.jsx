import PropTypes from 'prop-types'

const Spacing = ({ distance }) => {
  return (
    <div className={distance}></div>
  )
}

Spacing.propTypes = {
  distance: PropTypes.string.isRequired
}

export default Spacing