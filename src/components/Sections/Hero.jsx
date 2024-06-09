import PropTypes from 'prop-types'

const Hero = ({ children, HeroImage, height }) => {
  return (
    <section id='hero' className={`${height} relative overflow-hidden p-12 w-full z-0 flex items-center mt-20 xl:px-0 text-white`}>

      {/* Background Image */}
      <img
        className='absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-100'
        src={HeroImage}
        alt='hero image'
      />
      {/* Background Image */}

      {/* Overlay */}
      <div className='absolute inset-0 z-0 w-full h-full bg-black opacity-55'></div>
      {/* Overlay */}

      {/* Content Container */}
      <div id='heroContainer' className='mx-auto flex flex-col md:items-start z-10 sm:px-16'>
        {children}
      </div>
    </section >
  )
}
Hero.propTypes = {
  children: PropTypes.node,
  HeroImage: PropTypes.string,
  height: PropTypes.string
}
export default Hero