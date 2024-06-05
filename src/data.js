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
import Blog4Image from "../src/assets/Images/Blog/Articulos/blog4.webp";
import Blog3Image from "../src/assets/Images/Blog/Articulos/blog3.webp";
import Blog5Image from "../src/assets/Images/Blog/Articulos/blog5.webp";
import Blog6Image from "../src/assets/Images/Placeholder.webp";
import Blog7Image from "../src/assets/Images/Blog/Articulos/blog7.webp";
import Blog8Image from "../src/assets/Images/Blog/Articulos/blog8.webp";
import WebDevelopmentTutorial from "./assets/JSON/web-development-tutorial.json";
// import WebDesigner from "../src/assets/JSON/web-designer.json";
import VideoDesign from "../src/assets/JSON/video-design.json";
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
    idService: "diseño-web",
    serviceName: "Diseño Web",
    serviceDescription:
      "Transformo tus ideas en una experiencia web impresionante. Diseño web a medida, moderno y funcional que cautivará a tus visitantes.",
    lottieImage: WebDevelopmentTutorial,
    link: "/#diseño-web",
  },
  {
    id: 2,
    idService: "desarrollo-web",
    serviceName: "Desarrollo Web",
    serviceDescription:
      "Convierto tu visión en un sitio web interactivo y potente. Desarrollo web personalizado, optimizado y adaptado a tus necesidades. Juntos, llevaremos tu presencia en línea al siguiente nivel.",
    lottieImage: CodeDebugging,
    link: "/#desarrollo-web",
  },
  {
    id: 3,
    idService: "optimizacion",
    serviceName: "Optimización",
    serviceDescription:
      "Mejore el rendimiento y la experiencia de usuario de tu sitio web con el servicio de Optimización Web. Implemento técnicas avanzadas para aumentar velocidad, usabilidad y conversiones, potenciando tu presencia en línea.",
    lottieImage: UsabilityTesting,
    link: "/#optimizacion",
  },
  {
    id: 4,
    idService: "mantenimiento",
    serviceName: "Mantenimiento",
    serviceDescription:
      "Mantén tu sitio web actualizado, seguro y funcionando sin problemas. Mi servicio de mantenimiento web te brinda tranquilidad y tiempo para enfocarte en tu negocio principal. ¡Cuenta conmigo para cuidar de tu presencia en línea!",
    lottieImage: MobileApplicationTesting,
    link: "/#mantenimiento",
  },
  {
    id: 5,
    idService: "asesoria",
    serviceName: "Asesoría",
    serviceDescription:
      "Como asesor personal de Diseño y Desarrollo Web, trabajo contigo para crear un sitio cautivador y funcional que refleje la esencia de tu marca. ¡Contacta conmigo y llevemos tu presencia digital al siguiente nivel juntos!",
    lottieImage: VideoDesign,
    link: "/#asesoria",
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

export const articulosBlog = [
  {
    id: 1,
    titulo: "Mi nuevo Blog",
    imagen: Blog1Image,
    autor: "Daniel S.",
    fecha: "junio 22,2023",
    tiempo: "1 min.",
    categoria: "Personal",
  },
  {
    id: 2,
    idTitle: "fundamentos-diseño-web",
    titulo:
      "Los fundamentos del Diseño Web: Principios básicos y conceptos esenciales",
    imagen: Blog2Image,
    autor: "Daniel S.",
    fecha: "julio 24,2023",
    categoria: "Diseño Web",
    tiempo: "3 min.",
  },
  {
    id: 3,
    idTitle: "herramientas-diseño-web",
    titulo:
      "Herramientas de Diseño Web imprescindibles para principiantes y profesionales",
    imagen: Blog3Image,
    autor: "Daniel S.",
    fecha: "agosto 21,2023",
    tiempo: "2 min.",
    categoria: "Herramientas",
  },
  {
    id: 4,
    idTitle: "paleta-colores",
    titulo: "¿Cómo elegir la Paleta de Colores perfecta para tu Sitio Web?",
    imagen: Blog4Image,
    autor: "Daniel S.",
    fecha: "septiembre 12,2023",
    tiempo: "2 min.",
    categoria: "Diseño Web",
  },
  {
    id: 5,
    idTitle: "importancia-diseño-responsivo",
    titulo: "La Importancia del Diseño Responsivo en la Web Moderna",
    imagen: Blog5Image,
    autor: "Daniel S.",
    fecha: "octubre 17,2023",
    tiempo: "2 min.",
    categoria: "Diseño Web",
  },
  {
    id: 6,
    idTitle: "errores-comunes-diseño-web",
    titulo: "Los Errores Más Comunes en el Diseño Web y Cómo Evitarlos",
    imagen: Blog6Image,
    autor: "Daniel S.",
    fecha: "noviembre 21,2023",
    tiempo: "2 min.",
    categoria: "Diseño Web",
  },
  {
    id: 7,
    idTitle: "principales-frameworks",
    titulo: "Principales Frameworks de Desarrollo Frontend: Comparación y Uso",
    imagen: Blog7Image,
    autor: "Daniel S.",
    fecha: "diciembre 18,2023",
    tiempo: "2 min.",
    categoria: "Desarrollo Web",
  },
  {
    id: 8,
    idTitle: "tendencias-actuales-diseño-web",
    titulo: "Tendencias Actuales en Diseño Web: ¿Qué Está en Boga?",
    imagen: Blog8Image,
    autor: "Daniel S.",
    fecha: "enero 12,2023",
    tiempo: "3 min.",
    categoria: "Diseño Web",
  },
];

export const navlinks = [
  {
    id: 1,
    nameLink: "Inicio",
    href: "/#hero",
  },
  {
    id: 2,
    nameLink: "Sobre Mi",
    href: "/#sobre-mi",
  },
  {
    id: 3,
    nameLink: "Servicios",
    href: "/#servicios",
  },
  {
    id: 4,
    nameLink: "Portafolio",
    href: "/#portafolio",
  },
];

export const DesarrolloWebCategoria = articulosBlog.filter(
  (articulo) => articulo.categoria === "Desarrollo Web"
);
