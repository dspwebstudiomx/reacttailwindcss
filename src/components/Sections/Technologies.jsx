import Container from "../Templates/Container"
import { FaHtml5, FaCss3, FaReact, FaWordpress, FaFigma } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5";
import { FaElementor } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import Section from "../Templates/Section"


const Technologies = () => {
  return (
    <Section className="bg-slate-400" id="technologies">
      <Container className={"mt-0"}>
        <div className="flex gap-12 flex-wrap mx-auto justify-between">
          <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
            <FaHtml5 color="#0F172A" size={48} className="hover:scale-150" title="Html 5" />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Learn/CSS" target="_blank" rel="noopener noreferrer">
            <FaCss3 color="#0F172A" size={48} className="hover:scale-150" title="CSS 3" />
          </a>
          <a href="https://developer.mozilla.org/es/docs/Learn/JavaScript" target="_blank" rel="noopener noreferrer">
            <IoLogoJavascript color="#0F172A" size={48} className="hover:scale-150" title="JavaScript" />
          </a>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
            <FaReact color="#0F172A" size={48} className="hover:scale-150" title="React.js" />
          </a>
          <a href="https://wordpress.com/es/" target="_blank" rel="noopener noreferrer">
            <FaWordpress color="#0F172A" size={48} className="hover:scale-150" title="WordPress" />
          </a>
          <a href="https://elementor.com/" target="_blank" rel="noopener noreferrer">
            <FaElementor color="#0F172A" size={48} className="hover:scale-150" title="Elementor Page Builder" />
          </a>
          <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
            <FaFigma color="#0F172A" size={48} className="hover:scale-150" title="Figma" />
          </a>
          <a href="https://helpx.adobe.com/mx/xd/help/whats-new.html" target="_blank" rel="noopener noreferrer">
            <SiAdobexd olor="#0F172A" size={48} className="hover:scale-150" title="Adobe XD" />
          </a>
        </div>
      </Container>
    </Section>
  )
}

export default Technologies