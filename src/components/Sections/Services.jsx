import { servicios } from '../../data'
import Section from '../Templates/Section'
import Container from '../Templates/Container'
import TwoColumnSection from '../Templates/TwoColumnSection'
import TitleH2 from '../TitleH2'

const Services = () => {
  return (
    <Section id='services' className='bg-slate-100'>
      <Container>
        <TitleH2 title='Servicios' />
        {servicios.map((info) => {
          return (
            <Container key={info.id} className='py-14'>
              <TwoColumnSection>
                <h3 className='text-4xl font-semibold'><span className='text-blue-700 dark:text-blue-500 mr-3'>{info.id}.</span>{info.serviceName}</h3>
                <p className='text-lg mx-11 mt-3 md:mt-0 text-balance'>{info.serviceDescription}</p>
              </TwoColumnSection>
            </Container>

          )
        }
        )}
      </Container>
    </Section>
  )
}

export default Services