import Section from "../components/Templates/Section"
import Contacto from "../components/Sections/Contact";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import Container from "../components/Templates/Container";
import ReturnButton from "../components/ReturnButton";
import ToScrollSection from "../components/ToScrollSection";


const Contact = () => {
  return (
    <div className="" id="scrollTop">
      <Navbar />
      <ToScrollSection />
      <Section className="mt-10 bg-slate-300" id="contacto">
        <Container>
          <Contacto />
        </Container>
      </Section>
      <Footer />
      <ReturnButton />
    </div>
  )
}

export default Contact