
import Hero from '../../components/Sections/Hero'
import ButtonContainer from '../../components/Templates/ButtonContainer'
import { IoPersonOutline } from 'react-icons/io5'
import ButtonScroll from '../../components/Atoms/Buttons/ButtonScroll'
import { IoBookOutline } from 'react-icons/io5'
import PropTypes from 'prop-types'

const HeroHomePage = ({ image }) => {
  return (
    <Hero image={image} height={'py-16 min-h-[70vh] xl:min-h-[74vh]'}>
      <div className='max-w-screen-lg lg:mx-0 mb-6'>
        <h1 className='text-5xl font-bold text-white sm:text-4xl lg:text-5xl leading-snug mb-10'>Diseño y Desarrollo Web</h1>
        <p className='my-6 text-2xl leading-8 text-gray-300 line-height'>
          Convierte tu visión en una realidad digital con mi servicio de diseño y desarrollo web profesional.
        </p>
      </div>
      <ButtonContainer>
        <ButtonScroll
          iconLeft={<IoPersonOutline size={21} />}
          name={'Sobre Mí'}
          to={'#sobre-mi'}
        />
        <ButtonScroll
          iconLeft={<IoBookOutline size={21} />}
          name={'Contacto'}
          to={'#contacto'}
        />
      </ButtonContainer>
    </Hero>
  )
}
HeroHomePage.propTypes = {
  image: PropTypes.string
}

export default HeroHomePage