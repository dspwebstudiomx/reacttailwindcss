import 'animate.css'
import Navbar from '../../components/Sections/Navbar'
import About from '../../components/Sections/About'
import Services from '../../components/Sections/Services'
import Process from '../../components/Sections/Process'
import Clients from '../../components/Sections/Clients'
import Portfolio from '../../components/Sections/Portfolio'
import Technologies from '../../components/Sections/Technologies'
import Blog from '../HomePage/Blog'
import Contact from '../../components/Sections/Contact'
import Footer from '../../components/Sections/Footer'
import ReturnButton from '../../components/Atoms/Buttons/ReturnButton'
import Banner from '../../components/Sections/Banner'
import Testimonials from '../../components/Sections/Testimonials'
import HeroHomePage from './HeroHomePage'

const HomePage = () => {
  return (
    <div id='scrollTop'>
      <header>
        <Navbar />
      </header>
      <main className='mt-12'>
        <HeroHomePage />
        <Banner className={'py-10 text-xl'}>
          <p>Tu sitio web es más que una simple página. Es tu mejor representante en el mundo digital. Asegúrate de que esté a la altura con mi servicio de diseño y desarrollo web</p>
        </Banner>
        <About />
        <Technologies />
        <Services />
        <Process />
        <Clients />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
        <ReturnButton />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage