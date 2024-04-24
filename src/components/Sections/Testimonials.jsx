import Testimonial from "../Molecules/Testimonial"
import Container from "../Templates/Container"
import Section from "../Templates/Section"
import Placeholder from "../../assets/Images/Placeholder.webp"
import { testimonials } from "../../data"

const Testimonials = () => {
  return (
    <Section id="testimonials" className={'bg-slate-400 px-20 dark:bg-slate-400'}>
      <Container className="grid sm:grid-cols-2 gap-8">
        {testimonials.map(testimonial => {
          return (
            <Testimonial
              id={testimonial.id}
              key={testimonial.id}
              hyperlink={testimonial.hyperlink}
              nombre={testimonial.nombre}
              empresa={testimonial.empresa}
              imagen={testimonial.imagen || Placeholder}
              testimonio={testimonial.testimonio}
            />
          )
        })}
      </Container>

    </Section>
  )
}

export default Testimonials