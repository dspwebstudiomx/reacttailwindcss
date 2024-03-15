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
          <FaHtml5 color="#0F172A" size={48} className="hover:scale-150" />
          <FaCss3 color="#0F172A" size={48} className="hover:scale-150" />
          <IoLogoJavascript color="#0F172A" size={48} className="hover:scale-150" />
          <FaReact color="#0F172A" size={48} className="hover:scale-150" />
          <FaWordpress color="#0F172A" size={48} className="hover:scale-150" />
          <FaElementor color="#0F172A" size={48} className="hover:scale-150" />
          <FaFigma color="#0F172A" size={48} className="hover:scale-150" />
          <SiAdobexd olor="#0F172A" size={48} className="hover:scale-150" />
        </div>
      </Container>
    </Section>
  )
}

export default Technologies