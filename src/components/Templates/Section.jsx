import PropTypes from 'prop-types';

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={`bg-slate-200 dark:bg-slate-950 dark:text-slate-50 ${className} px-9 py-20 mx-auto`}>
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