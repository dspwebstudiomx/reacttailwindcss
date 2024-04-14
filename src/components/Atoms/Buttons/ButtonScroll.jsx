import { useRef } from 'react'
import { HashLink } from 'react-router-hash-link'
import PropTypes from 'prop-types'

const ButtonScroll = ({ id, name, icono, to, reverse, spanReverse, onclick }) => {

  const buttonRef = useRef(null);
  const classes = `rounded-lg text-white border-2  text-lg sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[240px] md:w-[182px] lg:w-[190px] h-[70px] md:h-[60px] ${reverse} mx-auto`

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
      <button onClick={onclick} type='button' className={classes} ref={buttonRef} id={id}>
        <span className={`mx-2 ${spanReverse}`}>{icono}</span>
        {name}
      </button>
    </HashLink>
  )
}

ButtonScroll.propTypes = {
  to: PropTypes.string,
  id: PropTypes.string,
  onclick: PropTypes.any,
  className: PropTypes.string,
  icono: PropTypes.object,
  name: PropTypes.string,
  reverse: PropTypes.string,
  spanReverse: PropTypes.string
};
export default ButtonScroll