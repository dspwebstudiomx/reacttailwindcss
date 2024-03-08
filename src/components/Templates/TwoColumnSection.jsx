import PropTypes from 'prop-types';

const TwoColumnSection = ({ children }) => {
  const containerClasses = `grid sm:grid-cols-2 gap-2 sm:gap-2 mx-auto`;

  return (
    <div className={containerClasses}>
      {children}
    </div>
  )
}

TwoColumnSection.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.string,
}

export default TwoColumnSection