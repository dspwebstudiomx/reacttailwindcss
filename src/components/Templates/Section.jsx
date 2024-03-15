import PropTypes from 'prop-types';

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={`py-20 px-12 sm:px-16 lg:px-0 bg-slate-200 dark:bg-slate-950 dark:text-slate-50 mx-auto ${className}`}>
      {children}
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Section