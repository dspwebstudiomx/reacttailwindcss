import { useState } from 'react';
import { FaBars, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../../assets/Logos/dsp-white.png'

function Navbar() {

  const Styles = {
    header: 'h-[80px] flex items-center justify-between bg-slate-900 text-white px-8 fixed w-full z-10 py-12 -mt-20',
    a: 'p-3 hover:border-b-2 hover:border-blue-500 active:text-blue-500',
    container: 'flex  w-full h-auto items-center justify-between sm:px-10',
    linkMobile: 'my-5 hover:border-b-4 hover:border-blue-500 active:text-lime-300 text-white text-3xl hover:pb-2',
    active: 'text-blue-500'
  }

  const [nav, setNav] = useState(false)
  const toggleNav = () => setNav(!nav)

  return (
    <div className={Styles.header} >
      <div className={Styles.container}>

        {/* logo */}
        <img id='logo' src={logo} alt='logo' className='w-[120px]' />

        {/* menu */}
        <ul className='hidden md:flex cursor-pointer'>
          <Link activeClass={Styles.active} to='hero' spy={true} smooth={true} offset={-96} duration={500} className={Styles.a}>Inicio</Link>
          <Link activeClass={Styles.active} to='about' spy={true} smooth={true} offset={-96} duration={500} className={Styles.a}>Sobre mi</Link>
          <Link activeClass={Styles.active} to='services' spy={true} smooth={true} offset={-96} duration={500} className={Styles.a}>Servicios</Link>
          <Link activeClass={Styles.active} to='portfolio' spy={true} smooth={true} offset={-96} duration={500} className={Styles.a}>Portafolio</Link>
          <Link activeClass={Styles.active} to='blog' spy={true} smooth={true} offset={-96} duration={500} className={Styles.a}>Blog</Link>
          <Link activeClass={Styles.active} to='contact' spy={true} smooth={true} offset={-96} duration={500} className={Styles.a}>Contacto</Link>
          <ul className="social my-auto mr-6 ml-12 flex gap-4">
            <li>
              <a href="https://www.facebook.com/dspwebstudio" target="_blank" rel="noopener noreferrer" className=' hover:text-blue-500'>
                <FaFacebookF size={32} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dspwebstudio" target="_blank" rel="noopener noreferrer" className=' hover:text-blue-500'>
                <FaInstagram size={32} />
              </a>
            </li>
          </ul>
        </ul>

        {/* menu button */}
        <div onClick={toggleNav} className='md:hidden z-40'>
          <FaBars size={30} color="white" />
        </div>

        {/* menu mobile*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-blue-900 opacity-[98%] z-30'}>
          <Link activeClass={Styles.active} to='hero' spy={true} smooth={true} offset={-96} duration={500} className={Styles.linkMobile} onClick={toggleNav}>Inicio</Link>
          <Link activeClass={Styles.active} to='about' spy={true} smooth={true} offset={-96} duration={500} className={Styles.linkMobile} onClick={toggleNav}>Sobre mi</Link>
          <Link activeClass={Styles.active} to='services' spy={true} smooth={true} offset={-96} duration={500} className={Styles.linkMobile} onClick={toggleNav}>Servicios</Link>
          <Link activeClass={Styles.active} to='portfolio' spy={true} smooth={true} offset={-96} duration={500} className={Styles.linkMobile} onClick={toggleNav}>Portafolio</Link>
          <Link activeClass={Styles.active} to='blog' spy={true} smooth={true} offset={-96} duration={500} className={Styles.linkMobile} onClick={toggleNav}>Blog</Link>
          <Link activeClass={Styles.active} to='contact' spy={true} smooth={true} offset={-96} duration={500} className={Styles.linkMobile} onClick={toggleNav}>Contacto</Link>
          <ul className="social my-12 mx-auto flex gap-12">
            <li>
              <a href="https://www.facebook.com/dspwebstudio" target="_blank" rel="noopener noreferrer" className=' hover:text-blue-500'>
                <FaFacebookF size={60} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/dspwebstudio" target="_blank" rel="noopener noreferrer" className=' hover:text-blue-500'>
                <FaInstagram size={60} />
              </a>
            </li>
          </ul>
        </ul>

      </div>
    </div >
  )
}

export default Navbar