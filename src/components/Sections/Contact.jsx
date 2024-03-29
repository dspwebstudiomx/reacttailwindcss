import Container from "../Templates/Container"
import ContactForm from "../ContactForm"
import TitleH2 from "../TitleH2"
import Section from "../Templates/Section"

const Contact = () => {
  return (
    <Section id="contacto" className="bg-slate-300">
      <Container className={'flex flex-wrap gap-10'}>
        <div id="contactDescription" className="flex flex-col items-center sm:items-start justify-center sm:w-[36%] w-[100%]">
          <TitleH2 title="Contacto" />
          <hr className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[15%] skew-x-12 mb-12 mx-auto text-center sm:ml-0" />

          <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt perspiciatis excepturi optio maiores quis, voluptate dolorem illum veniam officiis iusto maxime. Tempore repellendus itaque earum quam est expedita maxime possimus.</p>
        </div>
        <div id="contactForm" className="sm:w-[59%] w-[100%]">
          <ContactForm />
        </div>
      </Container>
    </Section>
  )
}

export default Contact