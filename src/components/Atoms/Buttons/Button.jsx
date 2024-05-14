import PropTypes from 'prop-types'
const Button = ({ onclick, texto, iconLeft, iconRight, type }) => {
  return (
    <button onClick={onclick} className='rounded-lg text-white border-2  text-lg sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[240px] md:w-[182px] lg:w-[190px] h-[70px] md:h-[60px]  mx-auto' type={type}>
      <span className="mr-2">
        {iconLeft}
      </span>
      {texto}
      <span className="ml-2">
        {iconRight}
      </span>
    </button>
  );
};

Button.propTypes = {
  onclick: PropTypes.func,
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  type: PropTypes.string,
  texto: PropTypes.string.isRequired,
};

export default Button