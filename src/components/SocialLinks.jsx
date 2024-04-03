import SocialLink from "./SocialLink"
import {
  FaRegEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";



const SocialLinks = () => {
  return (
    <div className="grid sm:grid-cols-2 gap-12 place-items-center lg:place-items-start">
      <SocialLink
        href={'https://www.facebook.com/dspwebstudio'}
        icono={<FiFacebook size={42} color="#203e90" />}
        texto={'dspwebstudio'}
      />
      <SocialLink
        href={'https://www.instagram.com/dspwebstudio'}
        icono={<FaInstagram size={42} color="#203e90" />}
        texto={'dspwebstudio'}
      />
      <SocialLink
        href={'mailto:contacto@dspwebstudio.com'}
        icono={<FaRegEnvelope size={42} color="#203e90" />}
        texto={'dspwebstudio'}
      />
      <SocialLink
        href={'https://wa.me/+524439188025'}
        icono={<FaWhatsapp size={42} color="#203e90" />}
        texto={'dspwebstudio'}
      />
    </div>
  )
}

export default SocialLinks