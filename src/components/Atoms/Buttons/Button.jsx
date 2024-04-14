import PropTypes from 'prop-types'
const Button = ({ onclick, texto, icono, type, reverse }) => {
  return (
    <button onClick={onclick} className={`rounded-lg text-white border-2  text-lg sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[240px] md:w-[182px] lg:w-[190px] h-[70px] md:h-[60px] ${reverse} mx-auto`} type={type}>
      <span className="mr-2">
        {icono}
      </span>
      {texto}
    </button>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
  reverse: PropTypes.string,
  icono: PropTypes.object,
  type: PropTypes.string,
  texto: PropTypes.string.isRequired,
};

export default Button