import Section from '../Templates/Section'
import Container from '../Templates/Container'

const Banner = () => {
  return (
    <Section className='bg-gradient-to-r from-blue-500 to-blue-900 dark:bg-gradient-to-r from-blue-500 to-blue-900'>
      <Container>
        <p className='text-xl text-white text-center'>Transforma Tu Visión en Realidad Digital con Nuestros Servicios de Diseño y Desarrollo Web</p>
      </Container>
    </Section>
  )
}

export default Banner