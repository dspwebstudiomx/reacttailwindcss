import Section from "../Templates/Section"
import Container from "../Templates/Container"
import Lottie from "lottie-react"
import lottieImageAbout from "../../assets/About.json"

const About = () => {
  return (
    <Section id="about" className="bg-slate-200 dark:bg-slate-800 dark:text-slate-100">
      <Container className="flex flex-col gap-12 sm:flex-row">
        <div className="text-lg flex  flex-col">
          <h2 className="text-3xl mb-3 text-center sm:text-left">Quien Soy</h2>
          <hr className="h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[15%] skew-x-12 mb-16 mx-auto text-center sm:ml-0 sm:mb-12" />
          <p><strong className="text-xl">Hola! Mi nombre es Daniel</strong>, orgullosamente mexicano. Desde niño he sido muy inquieto, siempre me pregunto el porqué y el cómo se hacen las cosas.</p>
          <br />
          <p>Me gusta mucho la parte creativa, aprender nuevas tecnologías para diseñar y desarrollar sitios para poder ayudar a los nuevos emprendedores.  Además apoyar a las personas que necesiten de mi experiencia y conocimientos.</p>
          <br />
          <p>
            <strong>Mi especialidad es ayudar a los nuevos emprendedores y apoyar a las personas para poder así crecer su negocio.</strong>
          </p>
        </div>
        <div className="flex flex-col text-center sm:text-left">
          <Lottie animationData={lottieImageAbout} loop={true} className="w-[280px] md:w-[332px] my-9 sm:ml-0 mx-auto" />
        </div>
      </Container>
    </Section>
  )
}

export default About