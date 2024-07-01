import 'animate.css'
import { Fragment, Suspense, lazy } from 'react'
import Footer from '../../components/Sections/Footer'
import ReturnButton from '../../components/Atoms/Buttons/ReturnButton'
import Banner from '../../components/Sections/Banner'
import { HelmetProvider } from 'react-helmet-async'
import SEOFriendly from '../../Functions/SEOFriendly'
import image from '../../assets/Images/HeroImage2.webp'
import Loading from '../../components/Loading'

const Navbar = lazy(() => import('../../components/Sections/Navbar'))
const HeroHomePage = lazy(() => import('./HeroHomePage'))
const About = lazy(() => import('../../components/Sections/About'))
const Services = lazy(() => import('../../components/Sections/Services'))
const Process = lazy(() => import('../../components/Sections/Process'))
const Clients = lazy(() => import('../../components/Sections/Clients'))
const Portfolio = lazy(() => import('../../components/Sections/Portfolio'))
const Technologies = lazy(() => import('../../components/Sections/Technologies'))
const Blog = lazy(() => import('../../pages/HomePage/Blog'))
const Contact = lazy(() => import('../../components/Sections/Contact'))
const Testimonials = lazy(() => import('../../components/Sections/Testimonials'))

const HomePage = () => {

  return (
    <Fragment>
      <HelmetProvider>
        <SEOFriendly
          charset="utf-8"
          title={'Inicio | dspwebstudio'}
          description={'Diseño y Desarrollo Web en Morelia Michoacán, posicionamiento SEO así como mantenimiento de sitios web.'}
          author={'dspwebstudio'}
          keywords={'diseño web Morelia, Diseño web Morelia, Desarrollo Web Morelia, desarrollo web morelia, mantenimiento sitio web, posicionamiento SEO'}
          type={'website'}
          image={image}
          linkHref={''}
        />
      </HelmetProvider>
      <Suspense fallback={<Loading />}>
        <header>
          <Navbar />
        </header>
        <main id='scrollTop' className='mt-12 text-xl sm:text-lg'>
          <HeroHomePage image={image} />
          <Banner id={'banner-inicial'} className={'py-10'} >
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
      </Suspense>
    </Fragment>
  )
}

export default HomePage