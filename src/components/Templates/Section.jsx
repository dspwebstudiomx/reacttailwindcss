import PropTypes from 'prop-types';

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={`p-12 lg:px-28 md:px-0 lg:py-8 bg-slate-200 dark:bg-slate-950 dark:text-slate-50 mx-auto ${className}`}>
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