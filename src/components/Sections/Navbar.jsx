import { useState } from "react";
import { FaBars, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/Logos/dsp-white.png"
import Spacing from "./Spacing";

function Navbar() {

  const Styles = {
    header: "fixed top-0 h-[98px] flex items-center justify-between bg-slate-900  text-white px-8 fixed w-full z-10 py-12 shadow-2xl",
    a: "px-3 hover:border-b-2 hover:border-blue-500 active:text-blue-500 pb-3",
    container: "flex  w-full h-auto items-center justify-between sm:px-10",
    linkMobile: "my-5 hover:border-b-4 hover:border-blue-500 active:text-blue-500 text-white text-3xl hover:pb-2"
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
          <img id="logo" src={logo} alt="logo" className="w-[120px]" />
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
            <li>
              <a href="https:/www.facebook.com/dspwebstudio" target="_blank" className=" hover:text-blue-500" aria-label="facebook">
                <FaFacebookF size={32} />
              </a>
            </li>
            <li>
              <a href="https:/www.instagram.com/dspwebstudio" target="_blank" className=" hover:text-blue-500" aria-label="instagram">
                <FaInstagram size={32} />
              </a>
            </li>
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
        <div className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-slate-900 opacity-[99%] z-10 gap-9"}>
          <ul className="flex flex-col gap-12">
            <li>
              <HashLink to="/#inicio" duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)} onClick={toggleNav} id="inicio">Inicio</HashLink>
            </li>
            <li>
              <HashLink to="/#about" duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)} onClick={toggleNav}>Sobre mi</HashLink>
            </li>
            <li>
              <HashLink to="/#services" duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)} onClick={toggleNav} >Servicios</HashLink>
            </li>
            <li>
              <HashLink to="/#portfolio" duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)} onClick={toggleNav}>Portafolio</HashLink>
            </li>
            <li>
              <Link to="/blog" duration={500} className={Styles.linkMobile} onClick={toggleNav}>Blog</Link>
            </li>
            <li>
              <Link to="/contacto" duration={500} className={Styles.linkMobile} onClick={toggleNav}>Contacto</Link>
            </li>
            <Spacing distance="my-4" />
          </ul>
          <div id="mt-4 mb-12 flex w-[75vw] justify-center items-center">
            <ul className="flex gap-12">
              <li>
                <Link to={"https:/www.facebook.com/dspwebstudio"} target="_blank" rel="noreferrer" aria-label="Facebook"><FaFacebookF size={48} /></Link>
              </li>
              <li>
                <Link to={"https:/www.instagram.com/dspwebstudio"} target="_blank" rel="noreferrer" aria-label="Instagram"><FaInstagram size={48} /></Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Menu mobile*/}

      </section>
    </nav >
  )
}

export default Navbar