import SocialLink from "./SocialLink"
import {
  FaRegEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";




const SocialLinks = () => {
  return (
    <div className="flex w-full justify-center gap-12 mb-16 flex-wrap">
      <SocialLink
        href={'https://www.facebook.com/dspwebstudio'}
        icono={<FiFacebook size={42} className="text-blue-900 hover:text-blue-600 hover:scale-110" />}
      />
      <SocialLink
        href={'https://www.instagram.dspwebstudio'}
        icono={<FaInstagram size={42} className="text-blue-900 hover:text-blue-600 hover:scale-110" />}
      />
      <SocialLink
        href={'mailto:contacto@dspwebstudio.com'}
        icono={<FaRegEnvelope size={42} className="text-blue-900 hover:text-blue-600 hover:scale-110" />}
      />
      <SocialLink
        href={'https://wa.me/+524439188025'}
        icono={<FaWhatsapp size={42} className="text-blue-900 hover:text-blue-600 hover:scale-110" />}
      />
      <SocialLink
        href={'tel:+524439188025'}
        icono={<FiPhone size={42} className="text-blue-900 hover:text-blue-600 hover:scale-110" />}
      />
    </div>
  )
}

export default SocialLinks