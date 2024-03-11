import ReturnButton from "../ReturnButton"
import Navbar from "../Sections/Navbar"
import Footer from "../Sections/Footer"
import PropTypes from "prop-types"


const PageTemplate = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main id="inicio">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
      <ReturnButton />
    </>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.element
}

export default PageTemplate