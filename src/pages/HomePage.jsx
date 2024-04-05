import "animate.css"
import Navbar from '../components/Sections/Navbar';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Services from '../components/Sections/Services';
import Clients from '../components/Sections/Clients';
import Portfolio from '../components/Sections/Portfolio';
import Technologies from '../components/Sections/Technologies';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import ReturnButton from '../components/Atoms/Buttons/ReturnButton';

const HomePage = () => {
  return (
    <div id="scrollTop">
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Technologies />
        <Services />
        <Clients />
        <Portfolio />
        <Contact />
        <ReturnButton />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage