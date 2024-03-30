import Container from "../Templates/Container"
import { FaHtml5, FaCss3, FaReact, FaWordpress, FaFigma } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5";
import { FaElementor } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import Section from "../Templates/Section"


const Technologies = () => {
  return (
    <Section className="bg-slate-400 dark:bg-slate-900" id="technologies">
      <Container className={''}>
        <div className=" grid grid-cols-4 gap-12 md:grid-cols-8 ">
          <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
            <FaHtml5 size={48} className="hover:scale-150 dark:text-white text-slate-900" title="Html 5" />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Learn/CSS" target="_blank" rel="noopener noreferrer">
            <FaCss3 size={48} className="hover:scale-150 dark:text-white text-slate-900" title="CSS 3" />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript" target="_blank" rel="noopener noreferrer">
            <IoLogoJavascript size={48} className="hover:scale-150 dark:text-white text-slate-900" title="JavaScript" />
          </a>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            <FaReact size={48} className="hover:scale-150 dark:text-white text-slate-900" title="React.js" />
          </a>
          <a href="https://wordpress.com/es/" target="_blank" rel="noopener noreferrer">
            <FaWordpress size={48} className="hover:scale-150 dark:text-white text-slate-900" title="WordPress" />
          </a>
          <a href="https://elementor.com/" target="_blank" rel="noopener noreferrer">
            <FaElementor size={48} className="hover:scale-150 dark:text-white text-slate-900" title="Elementor Page Builder" />
          </a>
          <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
            <FaFigma size={48} className="hover:scale-150 dark:text-white text-slate-900" title="Figma" />
          </a>
          <a href="https://helpx.adobe.com/mx/xd/help/whats-new.html" target="_blank" rel="noopener noreferrer">
            <SiAdobexd size={48} className="hover:scale-150 dark:text-white text-slate-900" title="Adobe XD" />
          </a>
        </div>
      </Container>
    </Section>
  )
}

export default Technologies