import { useState } from "react";
import { FaBars, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logoWhite from "../../assets/Logos/dsp-white.png"
import logoDark from "../../assets/Logos/dsp-color.webp"
import Spacing from "./Spacing";
import SocialLink from "../Atoms/Social/SocialLink";
import ThemeToggle from "../../Functions/ThemeToggle";
import { FaXmark } from "react-icons/fa6";
import { navlinks } from "../../data";
import { NavLink } from "react-router-dom";

function Navbar() {

  const Styles = {
    header: "fixed top-0 h-[98px] flex items-center justify-between dark:bg-slate-900 bg-white text-slate-800  dark:text-slate-100 px-8 fixed w-full z-10 py-12 shadow-2xl",
    a: "px-3 hover:border-b-[3px] hover:border-blue-500 active:text-blue-500 pb-3",
    container: "flex w-full xl:max-w-screen-xl h-auto items-center justify-between sm:px-10 mx-auto",
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
        <NavLink to="/#inicio" className="dark:block hidden  cursor-pointer w-[56%] sm:w-[70%] lg:w-auto" scroll={element => scrollWithOffset(element, 98)}>
          <img id="logo" src={logoWhite} alt=" dspwebstudio logo" className="w-[130px] -ml-4" />
        </NavLink>
        <NavLink to="/#inicio" className="dark:hidden block cursor-pointer w-[56%] sm:w-[70%] lg:w-auto" scroll={element => scrollWithOffset(element, 98)}>
          <img id="logo" src={logoDark} alt=" dspwebstudio logo" className="w-[90px]" />
        </NavLink>
        {/* Logo */}


        <div className="lg:hidden z-10 w-[5%] mr-12">
          <ThemeToggle />
        </div>

        {/* Menu */}
        <div className="hidden lg:flex items-center font-semibold">
          {/* Links */}
          <ul className="flex cursor-pointer">
            {navlinks.map((navlink) => {
              return (
                <li key={navlink.id}>
                  <HashLink to={navlink.href} duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 98)}>{navlink.nameLink}</HashLink>
                </li>
              )
            })}
            <li>
              <Link to="/blog" duration={500} className={Styles.a}>Blog</Link>
            </li>
            <li>
              <Link to="/contacto" duration={500} className={Styles.a}>Contacto</Link>
            </li>
          </ul>
          {/* Links */}

          {/* Social */}
          <ul className="social my-auto mr-6 ml-12 flex gap-4">
            <SocialLink
              href={'https://www.facebook.com/dspwebstudio'}
              icono={<FaFacebookF size={32} className='text-slate-800 dark:text-white hover:text-blue-600 hover:scale-110' />}
              ariaLabel={'Accede a mi  cuenta de Facebook'}
              title={'Visita mi página en Facebook'}
            />
            <SocialLink
              href={'https://www.instagram.com/dspwebstudio'}
              icono={<FaInstagram size={32} className='text-slate-800 dark:text-white hover:text-blue-600 hover:scale-110' />}
              ariaLabel={'Accede a mi  cuenta de Instagram'}
              title="Visita mi perfil de Instagram"
            />
            <ThemeToggle />
          </ul>
          {/* Social */}
        </div>
        {/* Menu */}

        {/* Menu button */}
        <div onClick={toggleNav} className="lg:hidden z-40 flex gap-8 items-center w-[7%]">
          {!nav ? <FaBars size={30} className="text-blue-900 dark:text-slate-100 z-40" /> : <FaXmark size={32} className="text-slate-100 dark:text-slate-100 z-30" />}
        </div>
        {/* Menu button */}

        {/* Menu mobile*/}
        <div className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-800 opacity-[99%] z-20 gap-4"}>
          <ul className="flex flex-col gap-8">
            {navlinks.map((navlink) => {
              return (
                <li key={navlink.id}>
                  <HashLink onClick={toggleNav} to={navlink.href} duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)}>{navlink.nameLink}</HashLink>
                  <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[35%] skew-x-12 mr-auto text-center mt-2' />
                </li>
              )
            })}
            <li>
              <Link to="/blog" duration={500} className={Styles.linkMobile} onClick={toggleNav}>Blog</Link>
              <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[35%] skew-x-12 mr-auto text-center mt-3' />
            </li>
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