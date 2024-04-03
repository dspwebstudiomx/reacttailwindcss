import PropTypes from 'prop-types';

const ButtonContainer = ({ children }) => {
  const classes = 'flex flex-col md:flex-row gap-6 mx-auto md:ml-0 mt-6'
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
ButtonContainer.propTypes = {
  children: PropTypes.node,
}


export default ButtonContainer