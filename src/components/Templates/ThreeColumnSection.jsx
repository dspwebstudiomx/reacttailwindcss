import PropTypes from 'prop-types';

const ThreeColumnSection = ({ children }) => {
  return (
    <article className={'grid lg:grid-cols-3 gap-4'}>
      {children}
    </article>
  )
}

ThreeColumnSection.propTypes = {
  children: PropTypes.node,
  columns: PropTypes.string,
}

export default ThreeColumnSection