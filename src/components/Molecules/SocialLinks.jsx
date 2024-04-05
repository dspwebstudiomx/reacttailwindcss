import SocialLink from "../Atoms/Social/SocialLink"
import {
  FaRegEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";




const SocialLinks = () => {
  return (
    <div className="grid grid-cols-3 sm:flex gap-8 place-items-center justify-center md:justify-start">
      <SocialLink
        href={'https://www.facebook.com/dspwebstudio'}
        icono={<FiFacebook size={42} className="text-blue-800 hover:text-blue-900 hover:scale-110" />}
      />
      <SocialLink
        href={'https://www.instagram.dspwebstudio'}
        icono={<FaInstagram size={42} className="text-blue-800 hover:text-blue-900 hover:scale-110" />}
      />
      <SocialLink
        href={'mailto:contacto@dspwebstudio.com'}
        icono={<FaRegEnvelope size={42} className="text-blue-800 hover:text-blue-900 hover:scale-110" />}
      />
      <SocialLink
        href={'https://wa.me/+524439188025'}
        icono={<FaWhatsapp size={42} className="text-blue-800 hover:text-blue-900 hover:scale-110" />}
      />
      <SocialLink
        href={'tel:+524439188025'}
        icono={<FiPhone size={42} className="text-blue-800 hover:text-blue-900 hover:scale-110" />}
      />
    </div>
  )
}

export default SocialLinks