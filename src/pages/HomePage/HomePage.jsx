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
import useTitle from '../../Functions/Hooks/useTitle'
import { HelmetProvider } from 'react-helmet-async'
import SEOFriendly from '../../Functions/SEOFriendly'
import image from '../../assets/Images/HeroImage2.webp'

const HomePage = () => {

  useTitle({ title: 'Inicio' })

  return (
    <HelmetProvider>
      <SEOFriendly
        linkHref={''}
        title={'dspwebstudio - Diseño y Desarrollo Web'}
        description={'Diseño y Desarrollo Web en Morelia Michoacán, posicionamiento SEO así como mantenimiento de sitios web.'}
        author={'dspwebstudio'}
        keywords={'diseño web Morelia, Diseño web Morelia, Desarrollo Web Morelia, desarrollo web morelia, mantenimiento sitio web, posicionamiento SEO'}
        type={'website'}
        image={image}
      />
      <div id='scrollTop'>
        <header>
          <Navbar />
        </header>
        <main className='mt-12 text-xl sm:text-lg'>
          <HeroHomePage image={image} />
          <Banner className={'py-10 text-xl'}>
            <p>Tu sitio web es más que una simple página. Es tu mejor representante en el mundo digital. Asegúrate de que esté a la altura con mi servicio de diseño y desarrollo web</p>
          </Banner>
          <About />
          <Services />
          <Process />
          <Clients />
          <Portfolio />
          <Testimonials />
          <Blog />
          <Technologies />
          <Contact />
          <ReturnButton />
        </main>
        <Footer />
      </div>
    </HelmetProvider>

  )
}

export default HomePage