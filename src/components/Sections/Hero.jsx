
import PropTypes from 'prop-types'
import HeroImage from '/../assets/Images/HeroImage.webp'

const Hero = ({ children }) => {
  return (
    <section id='inicio' className='relative overflow-hidden sm:py-32 px-12 w-full lg:px-5 z-0 h-[75vh] flex items-center mt-20'>

      {/* Background Image */}
      <img
        className='absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-100'
        src={HeroImage}
        alt='code symbol'
      />
      {/* Background Image */}

      {/* Overlay */}
      <div className='absolute inset-0 z-0 w-full h-full bg-black opacity-55'></div>
      {/* Overlay */}

      {/* Content Container */}
      {children}
      {/* Content Container */}


    </section >
  )
}
Hero.propTypes = {
  HeroImage: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
}

export default Hero