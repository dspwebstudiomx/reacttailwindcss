import PropTypes from 'prop-types';

const ButtonContainer = ({ children, distancia }) => {
  const classes = `flex flex-col md:flex-row gap-4 mx-auto md:ml-0 ${distancia}`
  return (
    <div className={classes}>
      {children}
    </div>
  )
}
ButtonContainer.propTypes = {
  distancia: PropTypes.string,
  children: PropTypes.node,
}


export default ButtonContainer