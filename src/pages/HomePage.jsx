import Navbar from "../components/Sections/Navbar"
import Hero from "../components/Sections/Hero"
import About from "../components/Sections/About"
import Services from "../components/Sections/Services"
import Clients from "../components/Sections/Clients"
import Portfolio from "../components/Sections/Portfolio"
import Technologies from "../components/Sections/Technologies"
import HeroImage from "../assets/Images/HeroImage.webp"
import ButtonContainer from "../components/Templates/ButtonContainer"
import Contact from "../components/Sections/Contact"
import Button from "../components/Button"
import Footer from "../components/Sections/Footer"
import ReturnButton from "../components/ReturnButton"
import "animate.css"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero HeroImage={HeroImage}>
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
    </>
  )
}

export default HomePage