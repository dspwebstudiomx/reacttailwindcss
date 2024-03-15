import Container from "../Templates/Container"
import ContactForm from "../ContactForm"
import Section from "../Templates/Section"
import TitleH2 from "../TitleH2"

const Contact = () => {
  return (
    <Section id="contacto" className="bg-slate-300">
      <Container className={'grid grid-cols-1 sm:grid-cols-2 gap-12'}>
        <div id="contactDescription" className="flex flex-col items-start justify-center">
          <TitleH2 title="Contacto" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis excepturi optio maiores quis, voluptate dolorem illum veniam officiis iusto maxime. Tempore repellendus itaque earum quam est expedita maxime possimus.</p>
        </div>
        <div id="contactForm">
          <ContactForm />
        </div>

      </Container>
    </Section>
  )
}

export default Contact