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
        <Banner>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ab hic, molestiae sit non doloremque voluptas natus? Repellat, molestiae ullam!</p>
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