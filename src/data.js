import BecArquitectosLogo from "./assets/Logos/BecArquitectos.png";
import RosaLavandaLogo from "./assets/Logos/RosaLavanda.png";
import EquityClaimsLuxLogo from "./assets/Logos/EquityClaimsLux.png";
import EquityClaimsItaliaLogo from "./assets/Logos/EquityClaimsItalia.png";
import PasionesdelAlmaLogo from "./assets/Logos/PasionesdelAlma.png";
import BecArquitectosBgImage from "./assets/Images/BecArquitectosSite.webp";
import RosaLavandaBgImage from "./assets/Images/RosaLavandaSite.webp";
import EquityClaimsLuxBgImage from "./assets/Images/EquityClaimsLuxSite.webp";
import EquityClaimsItaliaBgImage from "./assets/Images/EquityClaimsItaliaSite.webp";
import PasionesdelAlmaBgImage from "./assets/Images/MezcalPasionesSite.webp";
import Blog1Image from "../src/assets/Images/Blog/Articulos/blog1.webp";
import Blog2Image from "../src/assets/Images/Blog/Articulos/blog2.webp";
import Blog3Image from "../src/assets/Images/Blog/Articulos/blog3.webp";
import WebDevelopmentTutorial from "./assets/JSON/web-development-tutorial.json";
import CodeDebugging from "./assets/JSON/code-debugging.json";
import UsabilityTesting from "./assets/JSON/usability-testing.json";
import MobileApplicationTesting from "./assets/JSON/mobile-application-testing.json";
import rosalavandaTestimonialLogo from "./assets/Logos/TestimonialLogo/rosalavanda.png";
import becTestimonialLogo from "./assets/Logos/TestimonialLogo/bec.jpg";
import equityclaimsluxTestimonialLogo from "./assets/Logos/TestimonialLogo/equityclaimslux.jpg";
import mezcalpasionesTestimonialLogo from "./assets/Logos/TestimonialLogo/mezcalpasiones.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

export const servicios = [
  {
    id: 1,
    idService: "webDesign",
    serviceName: "Diseño Web",
    serviceDescription:
      "Transformo tus ideas en una experiencia web impresionante. Diseño web a medida, moderno y funcional que cautivará a tus visitantes.",
    lottieImage: WebDevelopmentTutorial,
  },
  {
    id: 2,
    idService: "webDevelopment",
    serviceName: "Desarrollo Web",
    serviceDescription:
      "Convierto tu visión en un sitio web interactivo y potente. Desarrollo web personalizado, optimizado y adaptado a tus necesidades. Juntos, llevaremos tu presencia en línea al siguiente nivel.",
    lottieImage: CodeDebugging,
  },
  {
    id: 3,
    idService: "optimization",
    serviceName: "Optimización",
    serviceDescription:
      "Mejore el rendimiento y la experiencia de usuario de tu sitio web con el servicio de Optimización Web. Implemento técnicas avanzadas para aumentar velocidad, usabilidad y conversiones, potenciando tu presencia en línea.",
    lottieImage: UsabilityTesting,
  },
  {
    id: 4,
    idService: "manteinance",
    serviceName: "Mantenimiento",
    serviceDescription:
      "Mantén tu sitio web actualizado, seguro y funcionando sin problemas. Mi servicio de mantenimiento web te brinda tranquilidad y tiempo para enfocarte en tu negocio principal. ¡Cuenta conmigo para cuidar de tu presencia en línea!",
    lottieImage: MobileApplicationTesting,
  },
];

export const clientes = [
  {
    id: 1,
    cliente: "Bec Arquitectos",
    alt: "BEC Arquitectos logo",
    href: "https://arqbec.com",
    logo: BecArquitectosLogo,
    backgroundImage: BecArquitectosBgImage,
    altPortolio: "Imagen del sitio web - BEC Arquitectos",
  },
  {
    id: 2,
    cliente: "RosaLavanda",
    alt: "RosaLavanda logo",
    href: "https://rosalavanda.com.mx",
    logo: RosaLavandaLogo,
    backgroundImage: RosaLavandaBgImage,
    altPortolio: "Imagen del sitio web - Rosa Lavanda",
  },
  {
    id: 3,
    cliente: "Equity Claims Lux",
    alt: "Equity Claims Lux logo",
    href: "https://equityclaimslux.com",
    logo: EquityClaimsLuxLogo,
    backgroundImage: EquityClaimsLuxBgImage,
    altPortolio: "Imagen del sitio web - Equity Claims Lux",
  },
  {
    id: 4,
    cliente: "Equity Claims Italia",
    alt: "Equity Claims Italia logo",
    href: "https://equityclaimsitalia.com",
    logo: EquityClaimsItaliaLogo,
    backgroundImage: EquityClaimsItaliaBgImage,
    altPortolio: "Imagen del sitio web - Equity Claims Italia",
  },
  {
    id: 5,
    cliente: "Mezcal Pasiones del Alma",
    alt: "Mezcal Pasiones del Alma logo",
    href: "https://mezcalpasiones.com",
    logo: PasionesdelAlmaLogo,
    backgroundImage: PasionesdelAlmaBgImage,
    altPortolio: "Imagen del sitio web - Mezcal Pasiones del Alma",
  },
];

export const articulosBlog = [
  {
    id: "1",
    titulo: "Mi nuevo Blog",
    extracto:
      "¡Bienvenido al maravilloso mundo del Diseño y Desarrollo Web! En este fascinante universo digital, te embarcarás en un emocionante viaje donde la creatividad y la tecnología se entrelazan para dar vida a sitios web asombrosos y funcionales. Imagina poder plasmar tus ideas en diseños atractivos y amigables, capaces de cautivar a usuarios de todas partes del mundo. Aquí aprenderás a dar forma a tu imaginación y convertirla en realidad, mientras dominas herramientas como HTML, CSS, JavaScript y mucho más.",
    imagen: Blog1Image,
    autor: "dspwebstudio",
    fecha: "23/02/2024",
    categoria: "Personal",
  },
  {
    id: "2",
    titulo:
      "Los fundamentos del Diseño Web: Principios básicos y conceptos esenciales",
    extracto:
      "El Diseño Web es una disciplina crucial en el desarrollo de sitios y aplicaciones digitales, ya que tiene el poder de transformar una simple interfaz en una experiencia cautivadora para los usuarios. Tanto para principiantes como para profesionales, es crucial contar con un conjunto de herramientas que faciliten y optimicen el proceso de diseño. En esta guía, exploraremos algunas de las herramientas más imprescindibles en el arsenal de un Front End Developer, abarcando desde prototipado hasta diseño gráfico y gestión de recursos.",
    imagen: Blog2Image,
    autor: "dspwebstudio",
    fecha: "12/03/2024",
    categoria: "Diseño Web",
  },
  {
    id: "3",
    titulo:
      "Herramientas de Diseño Web imprescindibles para principiantes y profesionales",
    extracto:
      "El diseño web es una disciplina esencial en el desarrollo de sitios y aplicaciones web, que permite crear interfaces atractivas y funcionales para los usuarios...",
    imagen: Blog3Image,
    autor: "dspwebstudio",
    fecha: "23/03/2024",
    categoria: "Herramientas",
  },
];

export const socialLinks = [
  {
    id: 1,
    social: "facebook",
    href: "https://www.facebook.com/dspwebstudio",
    icono: FaFacebookF,
    texto: "dspwebstudio",
  },
  {
    id: 2,
    social: "instagram",
    href: "https://www.instagram.com/dspwebstudio",
    icono: FaInstagram,
    texto: "dspwebstudio",
  },
  {
    id: 3,
    social: "email",
    href: "mailto:contacto@dspwebstudio.com",
    icono: FaEnvelope,
    texto: "dspwebstudio",
  },
  {
    id: 4,
    social: "whatsapp",
    href: "https://wa.me/+524439188025",
    icono: FaWhatsapp,
    texto: "dspwebstudio",
  },
];

export const testimonials = [
  {
    id: 1,
    nombre: "Aldo",
    empresa: "BEC Arquitectos",
    testimonio:
      "Daniel escuchó nuestras ideas y supo exactamente cómo consolidarlas en la propuesta para nuestro sitio web. Trabajar con él fue sencillo, rápido y eficiente.",
    hyperlink: "https://arqbec.com",
    imagen: becTestimonialLogo,
  },
  {
    id: 2,
    nombre: "Hilse",
    empresa: "Rosa Lavanda",
    testimonio:
      "Nuestra experiencia con Daniel ha sido muy buena, muy paciente, el trabajo en tiempo y forma, súper dedicado y siempre al pendiente de todas nuestras necesidades. Amamos cómo quedó nuestro e-commerce, ¡Muchas gracias Dani!",
    hyperlink: "https://rosalavanda.com.mx",
    imagen: rosalavandaTestimonialLogo,
  },
  {
    id: 3,
    nombre: "Thierry",
    empresa: "Equity Claims Lux",
    testimonio:
      "Daniel has perfectly captured the concept of our financial firm and translated  accurately into a very effective and attractive website. His responsive and wise contributions, pleased all our partners worldwide. Daniel is a professional very appreciated for his technical knowledge and his well grounded advice.",
    hyperlink: "https://equityclaimslux.com",
    imagen: equityclaimsluxTestimonialLogo,
  },
  {
    id: 4,
    nombre: "Abigail",
    empresa: "Mezcal Pasiones del Alma",
    testimonio:
      "Desde un inicio nos convenció su profesionalismo y disposición para escuchar nuestras ideas, inquietudes y dudas. Siempre fue proactivo y eso ayudó mucho para que realizáramos un trabajo en conjunto de una manera fácil y grata en tiempo y forma.",
    hyperlink: "https://mezcalpasiones.com",
    imagen: mezcalpasionesTestimonialLogo,
  },
];
