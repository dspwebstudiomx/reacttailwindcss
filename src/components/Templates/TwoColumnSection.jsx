import PropTypes from 'prop-types';
import Container from '../Templates/Container'

const TwoColumnSection = ({ children }) => {
  const containerClasses = `grid sm:grid-cols-2 gap-2 sm:gap-12 mx-auto`;

  return (
    <Container className={containerClasses}>
      {children}
    </Container>
  )
}

TwoColumnSection.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.string,
}

export default TwoColumnSection