import Logo from '../../assets/Logos/dsp-white.png'
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";


const Footer = () => {

  const scrollWithOffset = (element, offset) => {
    const elementPosition = element.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth'
    });
  }

  const Styles = {
    a: 'sm:my-1 hover:text-blue-500 flex  items-center justify-left',
    active: 'text-blue-500'
  }

  return (
    <footer className='w-full text-slate-100'>

      {/*  Columns Container */}
      <section
        className='flex flex-wrap p-4 md:p-10 lg:p-12 xl:px-40 xl:py-20 px-12 md:items-center lg:items-start md:flex-row md:flex-no-wrap bg-slate-800  w-full justify-center'>
        {/* Logo & Slogan Section */}
        <div className='flex-shrink-0 w-full md:text-left text-center lg:w-1/4 mb-8'>

          <HashLink to='/#inicio' className='cursor-pointer' scroll={element => scrollWithOffset(element, 98)}>
            <img id='logo' src={Logo} alt='dspwebstudio logo' className='w-[150px] mx-auto lg:m-0' />
          </HashLink>
          <p className='mt-2 text-lg text-center lg:text-left'>Generando oportunidades para tu negocio.</p>
        </div>
        {/* Logo & Slogan Section */}

        {/* Columns Sections */}

        {/* Sections */}
        <div className='flex flex-wrap flex-grow mt-10 text-center md:pl-20 md:mt-0 md:text-left lg:w-1/4 w-1/2 md:w-1/3'>
          <div className='w-full'>
            <h2 className='mb-3 text-xl font-medium tracking-normal text-blue-500 uppercase title-font'>Secciones</h2>
            <nav className='mb-10 list-none flex flex-col'>
              <ul className='flex flex-col gap-4 mt-5 sm:gap-1 text-xl text-balance xl:text-base text-left ml-12 sm:ml-0'>
                <li>
                  <HashLink active='Styles.active' to='/#hero' duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 80)}>
                    <span className='text-blue-500 mr-2' ><MdKeyboardDoubleArrowRight /></span>
                    Inicio
                  </HashLink>
                </li>
                <li>
                  <HashLink to='/#about' duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 80)}>
                    <span className='text-blue-500 mr-2' ><MdKeyboardDoubleArrowRight /></span>
                    Sobre mi
                  </HashLink>
                </li>
                <li>
                  <HashLink to='/#services' duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 80)} >
                    <span className='text-blue-500 mr-2' ><MdKeyboardDoubleArrowRight /></span>
                    Servicios
                  </HashLink>
                </li>
                <li>
                  <HashLink to='/#portfolio' duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 80)}>
                    <span className='text-blue-500 mr-2' ><MdKeyboardDoubleArrowRight /></span>
                    Portafolio
                  </HashLink>
                </li>
                <Link to='/blog' className={Styles.a}>
                  <span className='text-blue-500 mr-2' ><MdKeyboardDoubleArrowRight /></span>
                  Blog
                </Link>
                <li>
                  <Link to='/contacto' className={Styles.a}>
                    <span className='text-blue-500 mr-2' ><MdKeyboardDoubleArrowRight /></span>
                    Contacto
                  </Link>
                </li>
                <li>
                  <Link to={'/proceso-trabajo'} aria-label='Ver proceso de trabajo' id='processLink' className={Styles.a}>
                    <span className='text-blue-500 mr-2' ><MdKeyboardDoubleArrowRight /></span>
                    Proceso de Trabajo
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Sections */}

        {/* Services */}
        <div className='flex flex-wrap flex-grow mt-10 text-center md:pl-20 md:mt-0 md:text-left lg:w-1/4 w-1/2 md:w-1/3'>
          <div className='w-full'>
            <h2 className='mb-3 text-xl font-medium tracking-normal text-blue-500 uppercase title-font'>Servicios</h2>
            <nav className='mb-10 list-none flex flex-col'>
              <ul className='flex flex-col gap-4 mt-5 sm:gap-1 text-xl text-balance xl:text-base text-left ml-12 sm:ml-0'>
                <li>
                  <HashLink active='Styles.active' to='/#webDesign' duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 120)}>
                    <span className='text-blue-500 mr-2' ><MdKeyboardDoubleArrowRight /></span>
                    Diseño Web
                  </HashLink>
                </li>
                <li>
                  <HashLink to='/#webDevelopment' duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 120)}>
                    <span className='text-blue-500 mr-2' ><MdKeyboardDoubleArrowRight /></span>
                    Desarrollo Web
                  </HashLink>
                </li>
                <li>
                  <HashLink to='/#optimization' duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 120)} >
                    <span className='text-blue-500 mr-2' ><MdKeyboardDoubleArrowRight /></span>
                    Optimización
                  </HashLink>
                </li>
                <li>
                  <HashLink to='/#manteinance' duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 120)}>
                    <span className='text-blue-500 mr-2' ><MdKeyboardDoubleArrowRight /></span>                    Mantenimiento
                  </HashLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Services */}

        {/* Policy */}
        <div className='flex flex-wrap flex-grow mt-10 text-center md:pl-20 md:mt-0 md:text-left lg:w-1/4 w-full  md:w-1/3'>
          <div className='w-full'>
            <h2 className='mb-3 text-xl font-medium tracking-normal text-blue-500 uppercase title-font'>Aviso de Privacidad</h2>
            <nav className='mb-10 list-none flex flex-col'>
              <ul className='flex flex-col gap-4 mt-5 sm:gap-1 text-lg text-balance xl:text-base'>
                <li>
                  <Link to={'/politica-privacidad'} aria-label='Ver politica de Privacidad' id='privacyLink' className={Styles.a}>
                    <span className='text-blue-500 mr-2' ><MdKeyboardDoubleArrowRight /></span>
                    Política de privacidad
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        {/* Policy */}


        {/* Columns Sections */}



      </section>
      {/*  Columns Container */}
      <hr className={`h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-full`} />

      {/* Copyright Section */}
      <section className='text-whites bg-slate-950'>
        <div className='container px-5 py-4 mx-auto'>
          <p className='text-sm text-center'>
            <span>
              © 2024 Todos los derechos reservados
            </span>
            <br />
            <span className='text-blue-500'>
              dspwebstudio.com
            </span>
          </p>
        </div>
      </section>
      {/* Copyright Section */}

    </footer>
  )
}

export default Footer