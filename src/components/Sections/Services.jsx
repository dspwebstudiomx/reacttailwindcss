import { servicios } from '../../data'
import Section from '../Templates/Section'
import Container from '../Templates/Container'
import TitleH2 from '../Atoms/Headings/TitleH2'
import Lottie from 'lottie-react'


const Services = () => {
  return (
    <Section id='services' className='bg-slate-300'>
      <Container>
        <TitleH2 title='Servicios' />
        <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[7%] skew-x-12 mb-20 mx-auto text-center mt-1' />
        {servicios.map((servicio) => {
          return (
            <article key={servicio.id} className='flex flex-col mt-2 gap-32 w-full md:w-[80%] mx-auto'>
              <div className='flex flex-col sm:flex-row'>
                <div className='flex flex-col gap-6 justify-center'>
                  <h3 className='text-3xl font-semibold'><span className='text-blue-700 dark:text-blue-500 mr-3 '>{servicio.id}.</span><span className='first-letter:text-blue-700'>{servicio.serviceName}</span></h3>
                  <p className='text-xl text-balance'>{servicio.serviceDescription}</p>
                </div>
                <div id={`lottie-${servicio.serviceName}`} className='xl:w-1/2 mb-12 sm:mb-0'>
                  <Lottie animationData={servicio.lottieImage} loop={true} className="w-[280px] my-9 sm:mr-0 mx-auto" />
                </div>
              </div>
            </article>

          )
        }
        )}
      </Container>
    </Section>
  )
}

export default Services