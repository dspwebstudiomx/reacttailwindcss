import PropTypes from 'prop-types'
import { Link } from 'react-scroll';

const Button = ({ href, texto, icono, type }) => {
  const classes = 'rounded-lg text-white border-2  text-2xl sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[320px] sm:w-[210px] h-[70px]'
  return (
    <Link id={`button-${texto}`} to={href} spy={true} smooth={true} offset={-96} duration={50}>
      <button className={classes} type={type}>
        <span className="mr-1">
          {icono}
        </span>
        {texto}
      </button>
    </Link>

  );
};

Button.propTypes = {
  icono: PropTypes.object,
  type: PropTypes.string,
  texto: PropTypes.string.isRequired,
  href: PropTypes.string
};

export default Button