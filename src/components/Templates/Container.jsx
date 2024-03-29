import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  const containerClasses = `sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg ${className}`
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