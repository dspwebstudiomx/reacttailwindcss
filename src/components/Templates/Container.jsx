import PropTypes from 'prop-types';

const Container = ({ children, className }) => {

  const containerClasses = `${className} w-[80vw] xl:max-w-screen-lg lg:max-w-[768px] mx-auto`

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