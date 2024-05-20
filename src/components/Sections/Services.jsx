import { servicios } from '../../data'
import Section from '../Templates/Section'
import Container from '../Templates/Container'
import TitleH2 from '../Atoms/Headings/TitleH2'
import Lottie from 'lottie-react'


const Services = () => {
  return (
    <Section id='services' className='bg-slate-300 dark:bg-slate-800 dark:text-slate-100'>
      <Container>
        <TitleH2 title='Servicios' align={'items-center'} />
        {servicios.map((servicio) => {
          return (
            <article key={servicio.id} id={servicio.idService} className='flex flex-col mt-2 gap-32 w-full md:w-[100%] mx-auto place-items-center px-10 xl:w-[80%]'>
              <div className='flex flex-col sm:flex-row gap-12'>
                <div className='flex flex-col gap-6 justify-center'>
                  <h3 className='text-3xl font-semibold dark:text-blue-400 text-blue-900'><span className='mr-2'>{servicio.id}.</span><span>{servicio.serviceName}</span></h3>
                  <p className='text-balance tracking-normal'>{servicio.serviceDescription}</p>
                </div>
                <div id={`lottie-${servicio.serviceName}`} className='xl:w-1/2 mb-12 sm:mb-0'>
                  <Lottie animationData={servicio.lottieImage} loop={true} className='w-[280px] my-9 sm:mr-0 mx-auto' />
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