import Hero from '../components/Sections/Hero';
import About from '../components/Sections/About';
import Services from '../components/Sections/Services';
import Clients from '../components/Sections/Clients';
import Portfolio from '../components/Sections/Portfolio';
import PageTemplate from '../components/Templates/PageTemplate';

const HomePage = () => {
  return (
    <PageTemplate>
      <Hero />
      <About />
      <Services />
      <Clients />
      <Portfolio />
    </PageTemplate>
  )
}

export default HomePage