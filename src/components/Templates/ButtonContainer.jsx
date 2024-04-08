import PropTypes from 'prop-types';

const ButtonContainer = ({ children, distancia }) => {
  return (
    <div className={`flex flex-wrap gap-8 sm:gap-6 justify-center items-center ${distancia}`}>
      {children}
    </div>
  )
}
ButtonContainer.propTypes = {
  distancia: PropTypes.string,
  children: PropTypes.node,
}


export default ButtonContainer