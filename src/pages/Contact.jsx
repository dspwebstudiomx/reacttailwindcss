import Contacto from "../components/Sections/Contact";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import ReturnButton from "../components/Atoms/Buttons/ReturnButton";
import useTitle from "../Functions/Hooks/useTitle";

const Contact = () => {
  useTitle({ title: 'Contacto' })
  return (
    <div className="" id="scrollTop">
      <Navbar />
      <section className="mt-20 bg-slate-300 py-12 dark:bg-slate-800">
        <Contacto />
      </section>
      <Footer />
      <ReturnButton />
    </div>
  )
}

export default Contact