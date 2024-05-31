import SocialLink from '../Atoms/Social/SocialLink'
import {
  FaRegEnvelope,
  FaInstagram,
  FaWhatsapp,
} from 'react-icons/fa6';
import { FiFacebook } from 'react-icons/fi';
import { FiPhone } from 'react-icons/fi';

const classes = {
  Link: 'text-blue-900 hover:text-blue-500 hover:scale-110 dark:text-blue-500 text-xl',
  size: 52
}


const SocialLinks = () => {
  return (
    <div className='flex gap-4 items-center justify-center xl:justify-start'>
      <SocialLink
        href={'https://www.facebook.com/dspwebstudio'}
        icono={<FiFacebook size={classes.size} className={classes.Link} />}
        ariaLabel={'Accede a mi  cuenta de Facebook'}
        title={'Visita mi página en Facebook'}
      />
      <SocialLink
        href={'https://www.instagram.com/dspwebstudio'}
        icono={<FaInstagram size={44} className={classes.Link} />}
        ariaLabel={'Accede a mi  cuenta de Instagram'}
        title="Visita mi perfil de Instagram"
      />
      <SocialLink
        href={'mailto:contacto@dspwebstudio.com'}
        icono={<FaRegEnvelope size={classes.size} className={classes.Link} />}
        ariaLabel={'Envia un correo electrónico para contactarme'}
        title="Envía un Correo Electrónico"
      />
      <SocialLink
        href={'https://wa.me/+524439188025'}
        icono={<FaWhatsapp size={classes.size} className={classes.Link} />}
        ariaLabel={'Manda un mensaje a mi cuenta de WhatsApp'}
        title="Envía un Mensaje"
      />
      <SocialLink
        href={'tel:+524439188025'}
        icono={<FiPhone size={classes.size} className={classes.Link} />}
        ariaLabel="Llama a mi teléfono directamente si tienes una duda"
        title="Llámame"
      />
    </div>
  )
}

export default SocialLinks