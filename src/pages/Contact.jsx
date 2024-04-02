import Contacto from "../components/Sections/Contact";
import Navbar from "../components/Sections/Navbar";
import Footer from "../components/Sections/Footer";
import ReturnButton from "../components/ReturnButton";
import ToScrollSection from "../components/ToScrollSection";

const Contact = () => {
  return (
    <div className="" id="scrollTop">
      <Navbar />
      <ToScrollSection />
      <section className="mt-20 bg-slate-300">
        <Contacto />
      </section>
      <Footer />
      <ReturnButton />
    </div>
  )
}

export default Contact