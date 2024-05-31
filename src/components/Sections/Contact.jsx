import ContactForm from "../Molecules/ContactForm"
import Section from "../Templates/Section"
import SocialLinks from "../Molecules/SocialLinks"
import Spacing from "../Sections/Spacing"
import TwoColumnSection from "../Templates/TwoColumnSection"

const Contact = () => {
  return (
    <Section id="contacto" className="dark:bg-slate-800 dark:text-white mx-auto bg-slate-300">
      <TwoColumnSection>
        <div id="contactDescription">
          <h2 className="text-4xl text-center lg:text-left mb-2">Contáctame</h2>
          <hr className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[15%] skew-x-12 mb-12 mx-auto lg:mx-0" />
          <div className="text-xl">
            <p>En <strong>dspwebstudio</strong>, no solo creo sitios web, creo experiencias digitales cautivadoras. Con un enfoque en el diseño estético y la funcionalidad impecable, estoy aquí para convertir tus sueños en realidad en línea.</p>
            <br />
            <p>Juntos, haremos que tu presencia en la web sea inolvidable.
              ¡Hagamos que suceda! ¿Listo para llevar tu visión al siguiente nivel? Estoy aquí para ayudarte.
            </p>
            <br />
            <strong>¡Contáctame y comencemos a crear algo increíble!</strong>
          </div>
          <Spacing distance="mb-12" />
          <SocialLinks />
          <Spacing distance="mb-20" />
        </div>
        <div id="contactForm" className=" w-full mx-auto" >
          <ContactForm />
        </div>
      </TwoColumnSection>
    </Section>
  )
}

export default Contact