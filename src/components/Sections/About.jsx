import Section from "../Templates/Section"
import Container from "../Templates/Container"
import Lottie from "lottie-react"
import lottieImageAbout from "../../assets/About.json"
import TitleH2 from "../Atoms/Headings/TitleH2"

const About = () => {

  return (
    <Section id="sobre-mi" className="bg-slate-200 dark:bg-slate-800 dark:text-slate-100">
      <Container className="flex flex-col gap-12 sm:flex-row">
        <div className="flex  flex-col">
          <TitleH2 title="Quien Soy" align={'items-center sm:items-start'} />
          <p><strong>Hola! Mi nombre es Daniel</strong>, orgullosamente mexicano. Desde niño he sido muy inquieto, siempre me pregunto el porqué y el cómo se hacen las cosas.</p>
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