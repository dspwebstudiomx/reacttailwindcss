import { HashLink } from 'react-router-hash-link'
import PropTypes from 'prop-types'

const ButtonScroll = ({ name, icono, to, reverse, spanReverse }) => {

  const classes = `rounded-lg text-white border-2  text-2xl sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[320px] sm:w-[180px] h-[70px] ${reverse} mx-auto`

  const scrollWithOffset = (element, offset) => {
    const elementPosition = element.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  }
  return (
    <HashLink to={to} scroll={element => scrollWithOffset(element, 98)}>
      <button type='button' className={classes}>
        <span className={`mr-2 ${spanReverse}`}>{icono}</span>
        {name}
      </button>
    </HashLink>
  )
}

ButtonScroll.propTypes = {
  to: PropTypes.string,
  icono: PropTypes.object,
  name: PropTypes.string.isRequired,
  reverse: PropTypes.string,
  spanReverse: PropTypes.string
};
export default ButtonScroll