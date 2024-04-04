import PropTypes from 'prop-types';

const Container = ({ children, className }) => {

  const containerClasses = `${className} mx-auto`

  return (
    <div className={containerClasses}>
      {children}
    </div>
  )
}

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

export default Container