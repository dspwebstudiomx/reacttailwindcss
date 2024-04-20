import "animate.css"
import Navbar from '../../components/Sections/Navbar';
import Hero from '../../components/Sections/Hero';
import About from '../../components/Sections/About';
import Services from '../../components/Sections/Services';
import Process from '../../components/Sections/Process';
import Clients from '../../components/Sections/Clients';
import Portfolio from '../../components/Sections/Portfolio';
import Technologies from '../../components/Sections/Technologies';
import Contact from '../../components/Sections/Contact';
import Footer from '../../components/Sections/Footer';
import ReturnButton from '../../components/Atoms/Buttons/ReturnButton';
import Banner from '../../components/Sections/Banner'
import Testimonials from "../../components/Sections/Testimonials";

const HomePage = () => {
  return (
    <div id="scrollTop">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Banner />
        <About />
        <Technologies />
        <Services />
        <Process />
        <Clients />
        <Portfolio />
        <Testimonials />
        <Contact />
        <ReturnButton />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage