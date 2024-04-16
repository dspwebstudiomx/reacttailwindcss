import { FaArrowRight } from 'react-icons/fa6';
import ImagenProcesoWeb from '../../assets/Images/procesosweb.webp'
import Placeholder from '../../assets/Images/Placeholder.webp';
import ButtonScroll from '../Atoms/Buttons/ButtonScroll';
import BackgroundSection from '../Molecules/BackgroundSection';

const Process = () => {
  return (
    <BackgroundSection background={ImagenProcesoWeb || Placeholder} opacity={'opacity-75'}>
      <div className="grid md:grid-cols-2 text-slate-200">
        <div id='procesosDescripcion'>
          <h2 className='text-3xl font-semibold tracking-wide'><span className='text-blue-500 mr-1'>¿</span>Estás listo para descubrir cómo puedo llevar tu presencia en línea al siguiente nivel<span className='text-blue-500 ml-1'>?</span> </h2>
          <br />
          <p className='text-xl'>Visita mi proceso de trabajo en diseño y desarrollo web, únete al emocionante viaje hacia el éxito digital.</p>
          <div id="botonEnlace" className='grid place-content-center sm:place-content-start mt-10'>
            <ButtonScroll
              icono={<FaArrowRight size={21} />}
              name={"Ver Proceso"}
              to={"/proceso-trabajo"}
              reverse={'flex-row-reverse'}
            />
          </div>
        </div>
      </div>
    </BackgroundSection>
  )
}

export default Process