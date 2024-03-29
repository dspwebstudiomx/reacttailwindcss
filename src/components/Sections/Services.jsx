import { servicios } from '../../data'
import Section from '../Templates/Section'
import Container from '../Templates/Container'
import TwoColumnSection from '../Templates/TwoColumnSection'
import TitleH2 from '../TitleH2'
import Lottie from 'lottie-react'


const Services = () => {
  return (
    <Section id='services' className='bg-slate-300'>
      <Container>

        <TitleH2 title='Servicios' />
        <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[7%] skew-x-12 mb-20 mx-auto text-center mt-1' />
        {servicios.map((info) => {
          return (
            <Container key={info.id} className='flex-col mt-20'>
              <TwoColumnSection>
                <div className='flex flex-col gap-6 justify-center'>
                  <h3 className='text-4xl font-semibold'><span className='text-blue-700 dark:text-blue-500 mr-3'>{info.id}.</span>{info.serviceName}</h3>
                  <p className='text-xl text-wrap '>{info.serviceDescription}</p>
                </div>
                <div id={`lottie-${info.serviceName}`}>
                  <Lottie animationData={info.lottieImage} loop={true} className="w-full md:w-[380px] my-9 sm:mr-0 mx-auto" />
                </div>
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