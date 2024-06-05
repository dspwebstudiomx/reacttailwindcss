import PropTypes from 'prop-types';

const Section = ({ id, children, className }) => {
  return (
    <section id={id} className={` ${className} p-12 p mx-auto sm:px-0 bg-slate-200 dark:bg-slate-900 text-slate-900 dark:text-slate-100`}>
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