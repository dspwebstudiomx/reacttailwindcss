import Container from "../Templates/Container"
import Section from "../Templates/Section"
import { FaHtml5, FaCss3, FaReact, FaWordpress, FaFigma } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5";
import { FaElementor } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { FaGithubAlt } from "react-icons/fa";


const Technologies = () => {
  return (
    <Section className="bg-slate-400 dark:bg-slate-900" id="technologies">
      <Container className={''}>
        <div className=" grid grid-cols-4 gap-12 md:grid-cols-9  items-center">
          <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="blank" rel="noopener noreferrer">
            <FaHtml5 size={48} className="hover:scale-150 dark:text-white text-slate-900" title="Html 5" />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Learn/CSS" target="blank" rel="noopener noreferrer">
            <FaCss3 size={48} className="hover:scale-150 dark:text-white text-slate-900" title="CSS 3" />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript" target="blank" rel="noopener noreferrer">
            <IoLogoJavascript size={48} className="hover:scale-150 dark:text-white text-slate-900" title="JavaScript" />
          </a>
          <a href="https://react.dev/" target="blank" rel="noopener noreferrer">
            <FaReact size={48} className="hover:scale-150 dark:text-white text-slate-900" title="React.js" />
          </a>
          <a href="https://wordpress.com/es/" target="blank" rel="noopener noreferrer">
            <FaWordpress size={48} className="hover:scale-150 dark:text-white text-slate-900" title="WordPress" />
          </a>
          <a href="https://elementor.com/" target="blank" rel="noopener noreferrer">
            <FaElementor size={48} className="hover:scale-150 dark:text-white text-slate-900" title="Elementor Page Builder" />
          </a>
          <a href="https://www.figma.com/" target="blank" rel="noopener noreferrer">
            <FaFigma size={42} className="hover:scale-150 dark:text-white text-slate-900" title="Figma" />
          </a>
          <a href="https://helpx.adobe.com/mx/xd/help/whats-new.html" target="blank" rel="noopener noreferrer" className="hidden sm:block">
            <SiAdobexd size={42} className="hover:scale-150 dark:text-white text-slate-900" title="Adobe XD" />
          </a>
          <a href="https://github.com" target="blank" rel="noopener noreferrer">
            <FaGithubAlt size={52} className="hover:scale-150 dark:text-white text-slate-900" title="GitHub" />
          </a>
        </div>
      </Container>
    </Section>
  )
}

export default Technologies