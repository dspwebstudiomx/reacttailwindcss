import { useState } from "react";
import { FaBars, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/Logos/dsp-white.png"
import Spacing from "./Spacing";
import SocialLink from "../Atoms/Social/SocialLink";

function Navbar() {

  const Styles = {
    header: "fixed top-0 h-[98px] flex items-center justify-between bg-slate-900  text-white px-8 fixed w-full z-10 py-12 shadow-2xl",
    a: "px-3 hover:border-b-2 hover:border-blue-500 active:text-blue-500 pb-3",
    container: "flex w-full h-auto items-center justify-between sm:px-10",
    linkMobile: "my-5 hover:text-blue-600 active:text-blue-500 text-white text-3xl hover:pb-2"
  }

  const [nav, setNav] = useState(false);
  const toggleNav = () => setNav(!nav);

  const scrollWithOffset = (element, offset) => {
    const elementPosition = element.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  }
  if (nav) {
    document.body.classList.add('modal-active')
  } else {
    document.body.classList.remove('modal-active')
  }

  return (
    <nav id="navbar" className={Styles.header} >
      <section className={Styles.container}>

        {/* Logo */}
        <HashLink to="/#inicio" className="cursor-pointer" scroll={element => scrollWithOffset(element, 98)}>
          <img id="logo" src={logo} alt=" dspwebstudio logo" className="w-[120px]" />
        </HashLink>
        {/* Logo */}


        {/* Menu */}
        <div className="hidden lg:flex">
          {/* Links */}
          <ul className="flex cursor-pointer">
            <li>
              <HashLink to="/#inicio" duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 98)}>Inicio</HashLink>
            </li>
            <li>
              <HashLink to="/#about" duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 98)}>Sobre mi</HashLink>
            </li>
            <li>
              <HashLink to="/#services" duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 98)}>Servicios</HashLink>
            </li>
            <li>
              <HashLink to="/#portfolio" duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 98)}>Portafolio</HashLink>
            </li>
            {/* <li>
              <Link to="/blog" duration={500} className={Styles.a}>Blog</Link>
            </li> */}
            <li>
              <Link to="/contacto" duration={500} className={Styles.a}>Contacto</Link>
            </li>
          </ul>
          {/* Links */}

          {/* Social */}
          <ul className="social my-auto mr-6 ml-12 flex gap-4">
            <SocialLink
              href={'https://www.facebook.com/dspwebstudio'}
              icono={<FaFacebookF size={32} className='text-white hover:text-blue-600 hover:scale-110' />}
              ariaLabel={'Accede a mi  cuenta de Facebook'}
              title={'Visita mi página en Facebook'}
            />
            <SocialLink
              href={'https://www.instagram.com/dspwebstudio'}
              icono={<FaInstagram size={32} className='text-white hover:text-blue-600 hover:scale-110' />}
              ariaLabel={'Accede a mi  cuenta de Instagram'}
              title="Visita mi perfil de Instagram"
            />
          </ul>
          {/* Social */}
        </div>
        {/* Menu */}

        {/* Menu button */}
        <div onClick={toggleNav} className="lg:hidden z-40">
          <FaBars size={30} color="white" />
        </div>
        {/* Menu button */}

        {/* Menu mobile*/}
        <div className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-900 opacity-[99%] z-10 gap-4"}>
          <ul className="flex flex-col gap-8">
            <li>
              <HashLink to="/#inicio" duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)} onClick={toggleNav} id="inicio">Inicio</HashLink>
              <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[35%] skew-x-12 mr-auto text-center mt-2' />
            </li>
            <li>
              <HashLink to="/#about" duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)} onClick={toggleNav}>Sobre mi</HashLink>
              <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[35%] skew-x-12 mr-auto text-center mt-2' />


            </li>
            <li>
              <HashLink to="/#services" duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)} onClick={toggleNav} >Servicios</HashLink>
              <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[35%] skew-x-12 mr-auto text-center mt-2' />

            </li>
            <li>
              <HashLink to="/#portfolio" duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)} onClick={toggleNav}>Portafolio</HashLink>
              <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[35%] skew-x-12 mr-auto text-center mt-2' />

            </li>
            {/* <li>
              <Link to="/blog" duration={500} className={Styles.linkMobile} onClick={toggleNav}>Blog</Link>
              <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[35%] skew-x-12 mr-auto text-center mt-3' />

            </li> */}
            <li>
              <Link to="/contacto" duration={500} className={Styles.linkMobile} onClick={toggleNav}>Contacto</Link>
              <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[35%] skew-x-12 mr-auto text-center mt-2' />

            </li>
            <Spacing distance="my-4" />
          </ul>
          <div id="mt-4 mb-12 flex w-[75vw] justify-center items-center">
            <ul className="flex gap-12">
              <SocialLink
                href={'https://www.facebook.com/dspwebstudio'}
                icono={<FaFacebookF size={42} className='text-white hover:text-blue-900 hover:scale-110' />}
                ariaLabel={'Accede a mi  cuenta de Facebook'}
                title={'Visita mi página en Facebook'}
              />
              <SocialLink
                href={'https://www.instagram.com/dspwebstudio'}
                icono={<FaInstagram size={42} className='text-white hover:text-blue-900 hover:scale-110' />}
                ariaLabel={'Accede a mi  cuenta de Instagram'}
                title="Visita mi perfil de Instagram"
              />
            </ul>
          </div>
        </div>
        {/* Menu mobile*/}

      </section>
    </nav >
  )
}

export default Navbar