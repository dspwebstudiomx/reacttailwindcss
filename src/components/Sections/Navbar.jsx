import { useState } from "react";
import { FaBars, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/Logos/dsp-white.png"
import Spacing from "./Spacing";

function Navbar() {

  const Styles = {
    header: "fixed top-0 h-[98px] flex items-center justify-between bg-slate-900  text-white px-8 fixed w-full z-10 py-12 shadow-2xl",
    a: "px-3 hover:border-b-2 hover:border-blue-500 active:text-blue-500",
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

  return (
    <nav id="navbar" className={Styles.header} >
      <div className={Styles.container}>

        {/* logo */}
        <HashLink to="/#inicio" className="cursor-pointer" scroll={element => scrollWithOffset(element, 98)}>
          <img id="logo" src={logo} alt="logo" className="w-[120px]" />
        </HashLink>

        {/* menu */}
        <ul className="hidden md:flex cursor-pointer">

          <HashLink to="/#inicio" duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 98)}>Inicio</HashLink>
          <HashLink to="/#about" duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 98)}>Sobre mi</HashLink>
          <HashLink to="/#services" duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 98)}>Servicios</HashLink>
          <HashLink to="/#portfolio" duration={500} className={Styles.a} scroll={element => scrollWithOffset(element, 98)}>Portafolio</HashLink>
          <Link to="/blog" duration={500} className={Styles.a}>Blog</Link>
          <Link to="/contacto" duration={500} className={Styles.a}>Contacto</Link>
          <ul className="social my-auto mr-6 ml-12 flex gap-4">
            <li>
              <a href="https:/www.facebook.com/dspwebstudio" target="_blank" className=" hover:text-blue-500">
                <FaFacebookF size={32} />
              </a>
            </li>
            <li>
              <a href="https:/www.instagram.com/dspwebstudio" target="_blank" className=" hover:text-blue-500">
                <FaInstagram size={32} />
              </a>
            </li>
          </ul>
        </ul>
        {/* menu button */}
        <div onClick={toggleNav} className="md:hidden z-40">
          <FaBars size={30} color="white" />
        </div>

        {/* menu mobile*/}
        <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-blue-950 opacity-[99%] z-30"}>
          <HashLink to="/#inicio" duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)} onClick={toggleNav} id="inicio">Inicio</HashLink>
          <HashLink to="/#about" duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)} onClick={toggleNav}>Sobre mi</HashLink>
          <HashLink to="/#services" duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)} onClick={toggleNav} >Servicios</HashLink>
          <HashLink to="/#portfolio" duration={500} className={Styles.linkMobile} scroll={element => scrollWithOffset(element, 98)} onClick={toggleNav}>Portafolio</HashLink>
          <Link to="/blog" duration={500} className={Styles.linkMobile} onClick={toggleNav}>Blog</Link>
          <Link to="/contacto" duration={500} className={Styles.linkMobile} onClick={toggleNav}>Contacto</Link>
          <Spacing distance="my-4" />
          <ul id="social mt-4 mb-12 mx-auto flex gap-12">
            <Link to={"https:/www.facebook.com/dspwebstudio"} target="_blank" rel="noreferrer"><FaFacebookF /></Link>
            <Link to={"https:/www.instagram.com/dspwebstudio"} target="_blank" rel="noreferrer"><FaInstagram /></Link>
          </ul>
        </ul>

      </div>
    </nav >
  )
}

export default Navbar