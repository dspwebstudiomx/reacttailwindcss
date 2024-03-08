import Button from '../Button';
import ButtonContainer from '../Templates/ButtonContainer'
import HeroImage from '../../assets/Images/heroImage.webp'

const Hero = () => {
  return (
    <section id='hero' className='relative top-0 overflow-hidden sm:py-32 px-12 w-full lg:px-5 z-0 h-[70vh] flex items-center mt-20'>

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
      <div id='hero' className='mx-auto lg:max-w-screen-lg flex flex-col md:items-start z-10'>
        <div className='mx-auto max-w-2xl lg:mx-0'>
          <h1 className='text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl line-height'>Diseño y Desarrollo Web</h1>
          <p className='mt-6 text-2xl leading-6 text-gray-300 line-height'>
            Convierte tu visión en una realidad digital con nuestro servicio de diseño y desarrollo web profesional.
          </p>
        </div>
        <ButtonContainer>
          <Button
            background={'bg-gradient-to-r from-cyan-500 to-blue-500'}
            texto={'Sobre Mí'}
            href={'about'}
          />
        </ButtonContainer>
      </div>
      {/* Content Container */}

    </section >
  )
}

export default Hero