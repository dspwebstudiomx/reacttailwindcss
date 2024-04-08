import Container from "../Templates/Container"
import ContactForm from "../Molecules/ContactForm"
import Section from "../Templates/Section"
import SocialLinks from "../Molecules/SocialLinks"

const Contact = () => {
  return (
    <Section id="contact" className="bg-slate-300">
      <Container className="grid md:grid-cols-2 gap-20 md:gap-8">
        <div id="contactDescription" className="ml-auto">
          <h2 className="text-4xl text-center lg:text-left mb-2">Contáctame</h2>
          <hr className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[15%] skew-x-12 mb-12 mx-auto lg:mx-0" />
          <div className="text-xl">
            <p>En dspwebstudio, no solo creamos sitios web, creamos experiencias digitales cautivadoras. Con un enfoque en el diseño estético y la funcionalidad impecable, estamos aquí para convertir tus sueños en realidad en línea.</p>
            <br />
            <p>Juntos, haremos que tu presencia en la web sea inolvidable.
              ¡Hagamos que suceda! ¿Listo para llevar tu visión al siguiente nivel? Estoy aquí para ayudarte.
            </p>
            <br />
            <strong>¡Contáctame y comencemos a crear algo increíble!</strong>

          </div>
          <div className="mt-12">
            <SocialLinks />
          </div>
        </div>
        <div id="contactForm" className=" w-full mx-auto" >

          <ContactForm />
        </div>
      </Container>
    </Section>
  )
}

export default Contact