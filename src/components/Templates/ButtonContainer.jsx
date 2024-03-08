import PropTypes from 'prop-types';

const ButtonContainer = ({ children }) => {
  const classes = 'm-auto mt-10 max-w-2xl sm:mx-0 lg:max-w-none w-[70vw] flex gap-7'
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