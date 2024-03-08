import CarouselResponsive from '../CarouselResponsive'
import Container from '../Container'
import Section from '../Section'

const ClientCarousel = () => {
  return (
    <Section id='clients' className='bg-slate-400'>
      <Container>
        <CarouselResponsive />
      </Container>
    </Section>
  )
}

export default ClientCarousel