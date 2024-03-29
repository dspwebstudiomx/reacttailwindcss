import BecArquitectosLogo from "./assets/Logos/BecArquitectos.png";
import SusimpaticaLogo from "./assets/Logos/Susimpatica.png";
import RosaLavandaLogo from "./assets/Logos/RosaLavanda.png";
import FabiolaBeltranLogo from "./assets/Logos/FabiolaBeltranHS.png";
import EquityClaimsLuxLogo from "./assets/Logos/EquityClaimsLux.png";
import EquityClaimsItaliaLogo from "./assets/Logos/EquityClaimsItalia.png";
import PasionesdelAlmaLogo from "./assets/Logos/PasionesdelAlma.png";
import SiaraEstudioLogo from "./assets/Logos/SiaraEstudio.png";
import BecArquitectosBgImage from "./assets/Images/BecArquitectosSite.webp";
import SusimpaticaBgImage from "./assets/Images/SusimpaticaSite.webp";
import RosaLavandaBgImage from "./assets/Images/RosaLavandaSite.webp";
import FabiolaBeltranBgImage from "./assets/Images/FabiolaBeltranSite.webp";
import EquityClaimsLuxBgImage from "./assets/Images/EquityClaimsLuxSite.webp";
import EquityClaimsItaliaBgImage from "./assets/Images/EquityClaimsItaliaSite.webp";
import PasionesdelAlmaBgImage from "./assets/Images/MezcalPasionesSite.webp";
import SiaraEstudioBgImage from "./assets/Images/SiaraEventosSite.webp";
import Blog1Image from "../src/assets/Images/Blog/Articulos/blog1.webp";
import Blog2Image from "../src/assets/Images/Blog/Articulos/blog2.webp";
import Blog3Image from "../src/assets/Images/Blog/Articulos/blog3.webp";
import WebDevelopmentTutorial from "../src/assets/JSON/web-development-tutorial.json";
import CodeDebugging from "../src/assets/JSON/code-debugging.json";
import UsabilityTesting from "../src/assets/JSON/usability-testing.json";
import MobileApplicationTesting from "../src/assets/JSON/mobile-application-testing.json";

export const servicios = [
  {
    id: 1,
    serviceName: "Diseño Web",
    serviceDescription:
      "Transformo tus ideas en una experiencia web impresionante. Diseño web a medida, moderno y funcional que cautivará a tus visitantes.",
    lottieImage: WebDevelopmentTutorial,
  },
  {
    id: 2,
    serviceName: "Desarrollo Web",
    serviceDescription:
      "Convierto tu visión en un sitio web interactivo y potente. Desarrollo web personalizado, optimizado y adaptado a tus necesidades. Juntos, llevaremos tu presencia en línea al siguiente nivel.",
    lottieImage: CodeDebugging,
  },
  {
    id: 3,
    serviceName: "Optimización",
    serviceDescription:
      "Mejore el rendimiento y la experiencia de usuario de tu sitio web con el servicio de Optimización Web. Implemento técnicas avanzadas para aumentar velocidad, usabilidad y conversiones, potenciando tu presencia en línea.",
    lottieImage: UsabilityTesting,
  },
  {
    id: 4,
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
    alt: "BEC Arquitectos",
    href: "https://arqbec.com",
    logo: BecArquitectosLogo,
    backgroundImage: BecArquitectosBgImage,
  },
  {
    id: 2,
    cliente: "Susimpatica",
    alt: "Susimpática logo",
    href: "#",
    logo: SusimpaticaLogo,
    backgroundImage: SusimpaticaBgImage,
  },
  {
    id: 3,
    cliente: "RosaLavanda",
    alt: "RosaLavanda logo",
    href: "https://rosalavanda.com.mx",
    logo: RosaLavandaLogo,
    backgroundImage: RosaLavandaBgImage,
  },
  {
    id: 4,
    cliente: "Fabiola Beltrán",
    alt: "Fabiola Beltrán logo",
    href: "https://fabiolabeltran.dspwebstudio.com",
    logo: FabiolaBeltranLogo,
    backgroundImage: FabiolaBeltranBgImage,
  },
  {
    id: 5,
    cliente: "Equity Claims Lux",
    alt: "Equity Claims Lux logo",
    href: "https://equityclaimslux.com",
    logo: EquityClaimsLuxLogo,
    backgroundImage: EquityClaimsLuxBgImage,
  },
  {
    id: 6,
    cliente: "Equity Claims Italia",
    alt: "Equity Claims Italia logo",
    href: "https://equityclaimsitalia.com",
    logo: EquityClaimsItaliaLogo,
    backgroundImage: EquityClaimsItaliaBgImage,
  },
  {
    id: 7,
    cliente: "Mezcal Pasiones del Alma",
    alt: "Mezcal Pasiones del Alma logo",
    href: "https://mezcalpasiones.com",
    logo: PasionesdelAlmaLogo,
    backgroundImage: PasionesdelAlmaBgImage,
  },
  {
    id: 8,
    cliente: "Siara Estudio",
    alt: "Siara Estudio logo",
    href: "https://siaraestudio.com",
    backgroundImage: SiaraEstudioBgImage,
    logo: SiaraEstudioLogo,
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
    categoria: "Desarrollo Web",
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
    categoria: "Diseño Web",
  },
];
