
import PropTypes from 'prop-types'
import HeroImage from '../../assets/Images/HeroImage.webp'
import ButtonContainer from '../Templates/ButtonContainer'
import Button from '../Button'

const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden sm:py-32 px-12 w-full lg:px-5 z-0 h-[75vh] flex items-center'>

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
      <div id="hero" className="mx-auto lg:max-w-screen-lg flex flex-col md:items-start z-10">
        <div className="max-w-2xl lg:mx-0 mb-10 mx-5">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl line-height mb-10">Diseño y Desarrollo Web</h1>
          <p className="mt-6 text-2xl leading-6 text-gray-300 line-height">
            Convierte tu visión en una realidad digital con nuestro servicio de diseño y desarrollo web profesional.
          </p>
        </div>
        <ButtonContainer>
          <Button
            texto={"Sobre Mí"}
            href={"about"}
          />
        </ButtonContainer>
      </div>
      {/* Content Container */}


    </section >
  )
}
Hero.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Hero