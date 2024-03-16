import Logo from "../../assets/Logos/dsp-white.png"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom"

const Footer = () => {

  const scrollWithOffset = (element, offset) => {
    const elementPosition = element.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth"
    });
  }

  const Styles = {
    a: 'my-4 sm:my-1 hover:text-blue-500 text-lg',
    active: 'text-blue-500'
  }

  return (
    <div className="w-full text-slate-100 body-font">

      {/*  Columns Container */}
      <section
        className="flex flex-col flex-wrap p-4 md:p-10 lg:p-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap bg-gradient-to-r from-slate-700 to-slate-900  w-full">

        {/* Logo & Slogan Section */}
        <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left lg:w-1/3">
          <a className="flex items-center justify-center font-medium text-blue-500 title-font md:justify-start">
            <img src={Logo} alt="dspwebstudio logo"
              width={150} />
          </a>
          <p className="mt-2 text-lg">Generando oportunidades para tu negocio.</p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
              <a className=" cursor-pointer hover:text-gray-700">

              </a>
              <a className="ml-3  cursor-pointer hover:text-gray-700">

              </a>
              <a className="ml-3  cursor-pointer hover:text-gray-700">

              </a>
              <a className="ml-3  cursor-pointer hover:text-gray-700">

              </a>
            </span>
          </div>
        </div>
        {/* Logo & Slogan Section */}

        {/* Columns Section */}
        <div className="flex flex-wrap flex-grow mt-10 text-center md:pl-20 md:mt-0 md:text-left lg:w-1/3">
          <div className="w-1/2">
            <h2 className="mb-3 text-lg font-medium tracking-normal text-blue-500 uppercase title-font">Secciones</h2>
            <nav className="mb-10 list-none flex flex-col">
              <HashLink active='Styles.active' to='/#hero' duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 80)}>Inicio</HashLink>
              <HashLink to='/#about' duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 80)}>Sobre mi</HashLink>
              <HashLink to='/#services' duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 80)} >Servicios</HashLink>
              <HashLink to='/#portfolio' duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 80)}>Portafolio</HashLink>
              <Link to='/blog' className={Styles.a}>Blog</Link>
              <Link to='/contacto' className={Styles.a}>Contacto</Link>
            </nav>
          </div>
          <div className="px-4 w-1/2">
            <h2 className="mb-3 text-lg font-medium tracking-widest text-blue-500 uppercase title-font">Support</h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className=" cursor-pointer ">Contact Support</a>
              </li>
              <li className="mt-3">
                <a className=" cursor-pointer ">Help Resources</a>
              </li>
              <li className="mt-3">
                <a className=" cursor-pointer ">Release Updates</a>
              </li>
            </nav>
          </div>
        </div>
        {/* Columns Section */}

      </section>
      {/*  Columns Container */}

      {/* Copyright Section */}
      <section className="bg-slate-950 text-white">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-center">
            <span>
              © 2024 Todos los derechos reservados
            </span>
            <br />
            <span>
              dspwebstudio.com
            </span>
          </p>
        </div>
      </section>
      {/* Copyright Section */}

    </div>
  )
}

export default Footer