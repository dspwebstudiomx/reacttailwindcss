import PropTypes from 'prop-types';

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={`bg-slate-200 dark:bg-slate-950 dark:text-slate-50 mx-auto py-12 sm:py-20 px-12  sm:px-12 ${className}`}>
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