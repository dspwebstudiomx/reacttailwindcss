import PropTypes from 'prop-types';

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={` ${className} px-9 py-16 mx-auto sm:px-0`}>
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