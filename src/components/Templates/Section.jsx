import PropTypes from 'prop-types';

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={` ${className} p-12 sm:p-20 py-20 mx-auto`}>
      {children}
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Section