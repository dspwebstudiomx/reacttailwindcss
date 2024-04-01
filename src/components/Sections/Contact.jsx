import Container from "../Templates/Container"
import ContactForm from "../ContactForm"
import TitleH2 from "../TitleH2"
import Section from "../Templates/Section"

const Contact = () => {
  return (
    <Section id="contactoSection" className="bg-slate-300">
      <Container className="grid lg:grid-cols-2 gap-20 md:gap-8">
        <div id="contactDescription" className="mx-auto text-wrap">
          <TitleH2 title="Contacto" />
          <hr className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[15%] skew-x-12 mb-12 mx-auto text-center" />

          <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis excepturi optio maiores quis, voluptate dolorem illum veniam officiis iusto maxime. Tempore repellendus itaque earum quam est expedita maxime possimus.</p>
        </div>
        <div id="contactForm" className=" w-full mx-auto" >
          <ContactForm />
        </div>
      </Container>
    </Section>
  )
}

export default Contact