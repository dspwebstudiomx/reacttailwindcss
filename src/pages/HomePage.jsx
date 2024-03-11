import Navbar from '../components/Sections/Navbar';
import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Services from '../components/Sections/Services';
import Clients from '../components/Sections/Clients';
import Portfolio from '../components/Sections/Portfolio';
import Footer from '../components/Sections/Footer';
import ReturnButton from '../components/ReturnButton';

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Portfolio />
        <ReturnButton />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default HomePage