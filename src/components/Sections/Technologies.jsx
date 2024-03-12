import Container from '../Templates/Container'
import { FaHtml5, FaCss3, FaReact, FaWordpress, FaFigma } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5";
import { FaElementor } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";


const Technologies = () => {
  return (
    <section className='bg-slate-400 py-12 px-16'>
      <Container className={'mt-0'}>
        <div className='flex gap-8 flex-wrap mx-auto px-8 justify-between'>
          <FaHtml5 color='#0F172A' size={48} />
          <FaCss3 color='#0F172A' size={48} />
          <IoLogoJavascript color='#0F172A' size={48} />
          <FaReact color='#0F172A' size={48} />
          <FaWordpress color='#0F172A' size={48} />
          <FaElementor color='#0F172A' size={48} />
          <FaFigma color='#0F172A' size={48} />
          <SiAdobexd olor='#0F172A' size={48} />
        </div>
      </Container>
    </section>
  )
}

export default Technologies