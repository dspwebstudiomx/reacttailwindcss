import { FaArrowRight } from 'react-icons/fa6';
import ImagenProcesoWeb from '../../assets/Images/procesosweb.webp'
import Placeholder from '../../assets/Images/Placeholder.webp'
import ButtonScroll from '../Atoms/Buttons/ButtonScroll'
import BackgroundSection from '../Molecules/BackgroundSection'
import ButtonContainer from '../Templates/ButtonContainer'
import TwoColumnSection from '../Templates/TwoColumnSection'

const Process = () => {
  return (
    <BackgroundSection background={ImagenProcesoWeb || Placeholder} opacity={'opacity-75'} className={'p-6 py-12 md:p-12'}>
      <TwoColumnSection>
        <div id='procesosDescripcion'>
          <h2 className='text-3xl sm:text-2xl md:text-3xl font-semibold tracking-wide'>¿Estás listo para descubrir cómo puedo llevar tu presencia en línea al siguiente nivel?</h2>
          <br />
          <p className='text-xl'>Visita mi proceso de trabajo en diseño y desarrollo web, únete al emocionante viaje hacia el éxito digital.</p>
          <ButtonContainer id='botonEnlace' distancia={'mt-8'}>
            <ButtonScroll
              iconRight={<FaArrowRight size={21} />}
              name={'Visitar'}
              to={'/proceso-trabajo'}
              reverse={'flex-row-reverse'}
            />
          </ButtonContainer>
        </div>
      </TwoColumnSection>
    </BackgroundSection>
  )
}

export default Process