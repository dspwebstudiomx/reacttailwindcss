import Contacto from "../components/Sections/Contact";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import ReturnButton from "../components/Atoms/Buttons/ReturnButton";
import useTitle from "../Functions/Hooks/useTitle";
import { HelmetProvider } from "react-helmet-async";
import SEOFriendly from "../Functions/SEOFriendly";

const Contact = () => {
  useTitle({ title: 'Contacto' })
  return (
    <HelmetProvider>
      <SEOFriendly
        linkHref={'contacto'}
        title={'Contacto | dspwebstudio'}
        description={'contactar con dspwebstudio'}
        author={'dspwebstudio'}
        keywords={'contactar servicio'}
        type={'website'}
        image={''}
      />
      <div className="" id="scrollTop">
        <Navbar />
        <section className="mt-20 bg-slate-300 py-12 dark:bg-slate-800">
          <Contacto />
        </section>
        <Footer />
        <ReturnButton />
      </div>
    </HelmetProvider>

  )
}

export default Contact