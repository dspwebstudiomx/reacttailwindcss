import PropTypes from 'prop-types'
import { Link } from 'react-scroll';

const Button = ({ background, href, texto }) => {
  const classes = `rounded-lg text-white border-2  p-4 text-xl hover:bg-blue-800 ${background} w-[70vw] sm:w-[220px]`
  return (
    <Link id={`button.${texto}`} to={href} spy={true} smooth={true} offset={-96} duration={500}>
      <button className={classes}>
        {texto}
      </button>
    </Link>

  );
};

Button.propTypes = {
  background: PropTypes.string.isRequired,
  texto: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
};

export default Button