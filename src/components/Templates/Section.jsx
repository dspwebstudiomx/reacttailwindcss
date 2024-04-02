import PropTypes from 'prop-types';

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={`bg-slate-200 dark:bg-slate-950 dark:text-slate-50 ${className} md:py-32 p-8 py-12 mx-auto`}>
      {children}
    </section>
  )
}

Section.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
}

export default Section