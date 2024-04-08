import HeroImage from '../../assets/Images/HeroImage.webp'
import ButtonContainer from '../Templates/ButtonContainer'
import { IoPersonOutline } from "react-icons/io5";
import ButtonScroll from '../Atoms/Buttons/ButtonScroll';
import { IoBookOutline } from "react-icons/io5";



const Hero = () => {
  return (
    <section id='hero' className='relative overflow-hidden py-20 px-8 w-full z-0 flex items-center mt-20 min-h-fit lg:min-h-[70vh] xl:px-0'>

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
      <div id="heroContainer" className="mx-auto flex flex-col md:items-start z-10">
        <div className="max-w-screen-md lg:mx-0 mb-6 mx-5">
          <h1 className="text-5xl font-bold text-white sm:text-4xl lg:text-5xl leading-snug mb-10">Diseño y Desarrollo Web</h1>
          <p className="my-6 text-2xl leading-8 text-gray-300 line-height">
            Convierte tu visión en una realidad digital con nuestro servicio de diseño y desarrollo web profesional.
          </p>
        </div>
        <ButtonContainer>
          <ButtonScroll
            icono={<IoPersonOutline size={21} />}
            name={"Sobre Mí"}
            to={"#about"}
          />
          <ButtonScroll
            icono={<IoBookOutline size={21} />}
            name={"Contacto"}
            to={"#contact"}
          />
        </ButtonContainer>
        {/* Content Container */}
      </div>
    </section >
  )
}

export default Hero