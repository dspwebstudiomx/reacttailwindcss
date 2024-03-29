import ReturnButton from "../ReturnButton"
import Navbar from "../Sections/Navbar"
import Footer from "../Sections/Footer"
import PropTypes from "prop-types"
import Section from "./Section"
import Container from "./Container"
import ToScrollSection from "../ToScrollSection";


const PageTemplate = ({ id, children, TituloPrincipal, background }) => {
  return (
    <div id="scrollTop">
      <header>
        <Navbar />
      </header>
      <ToScrollSection />
      <main>
        <Section className={`mx-auto ${background}`} id={id}>
          <Container>
            <h1 className="text-3xl mx-auto text-center mb-2">{TituloPrincipal}</h1>
            <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[12%] skew-x-12 mb-20 mx-auto text-center' />
            {children}
          </Container>
        </Section>
      </main>
      <footer>
        <Footer />
      </footer>
      <ReturnButton />
    </div>
  )
}

PageTemplate.propTypes = {
  id: PropTypes.string,
  background: PropTypes.string,
  TituloPrincipal: PropTypes.string,
  children: PropTypes.node
}

export default PageTemplate