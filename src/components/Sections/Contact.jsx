import Container from "../Templates/Container"
import ContactForm from "../ContactForm"
import Section from "../Templates/Section"
import SocialLinks from "../SocialLinks"

const Contact = () => {
  return (
    <Section id="contact" className="bg-slate-300">
      <Container className="grid lg:grid-cols-2 gap-20 md:gap-8">
        <div id="contactDescription" className="ml-auto">
          <h2 className="text-4xl text-center sm:text-left mb-2">Contacto</h2>
          <hr className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[15%] skew-x-12 mb-12 mx-auto md:ml-auto" />
          <p className="text-2xl">
            ¡Hagamos que suceda! ¿Listo para llevar tu visión al siguiente nivel? Estoy aquí para ayudarte.
            <strong>¡Contáctame y comencemos a crear algo increíble juntos!</strong>
          </p>
          <div className="mt-12 mx-auto w-full">
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