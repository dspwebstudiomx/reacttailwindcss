
import PageSubtitle from '../components/Molecules/PageSubtitle'
import Spacing from '../components/Sections/Spacing'
import PageTemplate from '../components/Templates/PageTemplate'
import { MdOutlinePersonSearch } from "react-icons/md";
import { FaArrowsRotate, FaListCheck, FaCodepen } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { HelmetProvider } from 'react-helmet-async';
import SEOFriendly from '../Functions/SEOFriendly';
import image from '../assets/Images/HeroImage2.webp'


const WorkProcess = () => {
  return (
    <HelmetProvider>
      <SEOFriendly
        linkHref={'proceso-trabajo'}
        title={'Proceso de Trabajo | dspwebstudio'}
        description={'Proceso de trabajo en dspwebstudio'}
        author={'dspwebstudio'}
        keywords={'diseño web Morelia, Diseño web Morelia, Desarrollo Web Morelia, desarrollo web morelia, mantenimiento sitio web, posicionamiento SEO'}
        type={'website'}
        image={image}
      />
      <PageTemplate TituloPrincipal={"Proceso de Trabajo"}>
        <div id='descripcionProceso' className='text-pretty'>
          <p>
            En <strong>dspwebstudio</strong>, me comprometo a brindarte una experiencia de diseño y desarrollo web sin problemas. Mi proceso de trabajo ha sido refinado a lo largo de años de experiencia para garantizar resultados excepcionales y la máxima satisfacción del cliente.
          </p>
          <br />
          <p>
            Aquí te presento mi enfoque paso a paso:
          </p>

          <Spacing distance='mb-12' />

          <div className='px-6 pb-4 tracking-tight mx-auto rounded-xl text-balance'>

            {/* 1. Consulta inicial */}
            <article id='ConsultaInicial' className='flex flex-col sm:flex-row gap-12 sm:gap-0'>
              <div className='flex-col sm:w-2/3'>
                <PageSubtitle number='1.' subtitle='Consulta inicial' className='w-full' />
                <BsFillJournalBookmarkFill className='text-blue-600 mx-auto sm:ml-16 xl:ml-24 mt-6' size={54} />
              </div>
              <p className='w-full'>
                Comienzo con una consulta inicial gratuita donde discutimos tus necesidades, objetivos y expectativas para tu sitio web. Me aseguro de comprender completamente tu visión para poder ofrecerte soluciones personalizadas que cumplan con tus requisitos.
              </p>
            </article>
            <Spacing distance='mb-12' />
            {/* 1. Consulta inicial */}

            {/* 2.Planificación y Estrategia */}
            <article id='PlanificacionEstrategia' className='flex flex-col sm:flex-row gap-6 sm:gap-0'>
              <div className='flex-col sm:w-2/3'>
                <PageSubtitle number='2.' subtitle='Planificación y Estrategia' className='w-full' />
                <MdOutlinePersonSearch className='text-blue-600 mx-auto sm:ml-16 xl:ml-24 mt-7 sm:mt-6' size={68} />
              </div>
              <p className='w-full'>
                Desarrollo una estrategia detallada que abarca el diseño visual, la arquitectura de la información, la funcionalidad y la experiencia del usuario. Me aseguro de que cada aspecto del proyecto esté alineado con tus metas comerciales y las necesidades de tu audiencia.
              </p>
            </article>
            <Spacing distance='mb-12' />
            {/* 2.Planificación y Estrategia */}

            {/* 3. Diseño Creativo */}
            <article id='DiseñoCreativo' className='flex flex-col sm:flex-row gap-6 sm:gap-0'>
              <div className='flex-col sm:w-2/3'>
                <PageSubtitle number='3.' subtitle='Diseño Creativo' className='w-full' />
                <FaCodepen className='text-blue-600 mx-auto sm:ml-16 xl:ml-24 mt-7 sm:mt-6' size={68} />
              </div>
              <p className='w-full'>
                Trabajo en estrecha colaboración contigo para crear un diseño web único y atractivo que refleje la identidad de tu marca. Te presento opciones de diseño y trabajo contigo para refinar el concepto hasta que estés completamente satisfecho.
              </p>
            </article>
            <Spacing distance='mb-12' />
            {/* 3. Diseño Creativo */}

            {/* 4. Desarrollo y Construcción */}
            <article id='DesarrolloConstruccion' className='flex flex-col sm:flex-row gap-6 sm:gap-0'>
              <div className='flex-col sm:w-2/3'>
                <PageSubtitle number='4.' subtitle='Desarrollo y Construcción' className='w-full' />
                <FaLaptopCode className='text-blue-600 mx-auto sm:ml-16 xl:ml-24 mt-7 sm:mt-6' size={68} />
              </div>
              <p className='w-full'>
                Una vez aprobado el diseño, entro en acción para convertirlo en realidad. Utilizo las últimas tecnologías y mejores prácticas de desarrollo para garantizar un sitio web funcional, rápido y completamente optimizado para todos los dispositivos y navegadores.
              </p>
            </article>
            <Spacing distance='mb-12' />
            {/* 4. Desarrollo y Construcción */}

            {/* 5. Pruebas y Revisión */}
            <article id='PruebasRevision' className='flex flex-col sm:flex-row gap-6 sm:gap-0'>
              <div className='flex-col sm:w-2/3'>
                <PageSubtitle number='5.' subtitle='Pruebas y Revisión' className='w-full' />
                <FaListCheck className='text-blue-600 mx-auto sm:ml-16 xl:ml-24 mt-4 sm:mt-6' size={68} />
              </div>
              <p className='w-full'>
                Realizo pruebas exhaustivas en todas las etapas del desarrollo para garantizar que tu sitio web funcione perfectamente y se vea impecable en cualquier entorno. Te invitamos a revisar y proporcionar comentarios para que podamos realizar ajustes según sea necesario.
              </p>
            </article>
            <Spacing distance='mb-24' />
            {/* 5. Pruebas y Revisión */}

            {/* 6. Entrega y Soporte Continuo' */}
            <article className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
              <div className='flex-col sm:w-2/3'>
                <PageSubtitle number='6.' subtitle='Entrega y Soporte Continuo' className='w-full' />
                <FaArrowsRotate className='text-blue-600 mx-auto sm:ml-24 my-4 sm:mt-6' size={68} />
              </div>
              <p className='w-full'>
                Una vez finalizado y aprobado el sitio web, te proporciono todos los archivos y recursos necesarios. Además, ofrezco soporte continuo para resolver cualquier problema técnico, realizar actualizaciones o proporcionar capacitación si es necesario.
              </p>
            </article>
            <Spacing distance='mb-12' />
            {/* 6. Entrega y Soporte Continuo' */}

          </div>
        </div>
      </PageTemplate>
    </HelmetProvider>
  )
}

export default WorkProcess