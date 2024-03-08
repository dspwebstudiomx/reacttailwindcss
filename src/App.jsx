import './App.css';
import 'animate.css';
import Navbar from './components/Sections/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Services from './components/Sections/Services';
import Clients from './components/Sections/Clients';
import Portfolio from './components/Sections/Portfolio';
import Footer from './components/Sections/Footer';
import ReturnButton from './components/ReturnButton';

export default function App() {
  return (
    <div className='relative'>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <Services />
        <Clients />
        <Portfolio />
        <Footer />
        <ReturnButton />
      </main >
    </div>
  )
}

