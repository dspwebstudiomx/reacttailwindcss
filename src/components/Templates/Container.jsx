import PropTypes from 'prop-types';

const Container = ({ children, className }) => {
  const containerClasses = `md:max-w-screen-md lg:max-w-screen-lg mx-auto ${className} mt-20`

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