import { HashLink } from 'react-router-hash-link'
import PropTypes from 'prop-types'

const ButtonScroll = ({ name, iconLeft, iconRight, to, onclick }) => {

  const classes = 'rounded-lg text-white border-2  text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[70%] md:w-[150px] lg:w-[170px] h-[80px] sm:h-[60px] mx-auto border-white shadow-2xl'

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
      <button onClick={onclick} type='button' className={classes} id={`Button_${to}`}>
        <span className='mr-2'>{iconLeft}</span>
        {name}
        <span className='ml-2'>{iconRight}</span>
      </button>
    </HashLink>
  )
}

ButtonScroll.propTypes = {
  to: PropTypes.string,
  onclick: PropTypes.any,
  className: PropTypes.string,
  iconLeft: PropTypes.object,
  iconRight: PropTypes.object,
  name: PropTypes.string,
};
export default ButtonScroll