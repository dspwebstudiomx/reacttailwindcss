import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  const containerClasses = `md:max-w-screen-md grid mx-auto lg:gap-2 ${className}`

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