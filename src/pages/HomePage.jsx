import "animate.css"
import { lazy, Suspense } from 'react';

const Navbar = lazy(() => import('../components/Sections/Navbar'));
const Hero = lazy(() => import('../components/Sections/Hero'));
const About = lazy(() => import('../components/Sections/About'));
const Services = lazy(() => import('../components/Sections/Services'));
const Clients = lazy(() => import('../components/Sections/Clients'));
const Portfolio = lazy(() => import('../components/Sections/Portfolio'));
const Technologies = lazy(() => import('../components/Sections/Technologies'));
const ButtonContainer = lazy(() => import('../components/Templates/ButtonContainer'));
const Contact = lazy(() => import('../components/Sections/Contact'));
const Button = lazy(() => import('../components/Button'));
const Loading = lazy(() => import('../components/Loading.jsx'));
const Footer = lazy(() => import('../components/Sections/Footer'));
const ReturnButton = lazy(() => import('../components/ReturnButton'));

const HomePage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Navbar />
      <Hero>
        <div id="hero" className="mx-auto lg:max-w-screen-lg flex flex-col md:items-start z-10">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl line-height">Diseño y Desarrollo Web</h1>
            <p className="mt-6 text-2xl leading-6 text-gray-300 line-height">
              Convierte tu visión en una realidad digital con nuestro servicio de diseño y desarrollo web profesional.
            </p>
          </div>
          <ButtonContainer>
            <Button
              background={"bg-gradient-to-r from-cyan-500 to-blue-500"}
              texto={"Sobre Mí"}
              href={"about"}
            />
          </ButtonContainer>
        </div>
        {/* Content Container */}
      </Hero>
      <About />
      <Technologies />
      <Services />
      <Clients />
      <Portfolio />
      <Contact />
      <Footer />
      <ReturnButton />
    </Suspense >
  )
}

export default HomePage