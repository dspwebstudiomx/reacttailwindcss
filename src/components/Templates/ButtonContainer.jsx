import PropTypes from 'prop-types';

const ButtonContainer = ({ children, distancia }) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-8 sm:gap-6 justify-center sm:justify-start sm:w-2/3 ${distancia}`}>
      {children}
    </div>
  )
}
ButtonContainer.propTypes = {
  distancia: PropTypes.string,
  children: PropTypes.node,
}


export default ButtonContainer