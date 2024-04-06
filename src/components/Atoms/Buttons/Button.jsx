import PropTypes from 'prop-types'
const Button = ({ onclick, texto, icono, type }) => {
  const classes = 'rounded-lg text-white border-2  text-2xl sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-full sm:w-[210px] h-[90px] md:h-[60px] mx-auto'
  return (
    <button onClick={onclick} className={classes} type={type}>
      <span className="mr-2">
        {icono}
      </span>
      {texto}
    </button>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
  icono: PropTypes.object,
  type: PropTypes.string,
  texto: PropTypes.string.isRequired,
};

export default Button