import Testimonial from "../Molecules/Testimonial"
import Container from "../Templates/Container"
import Section from "../Templates/Section"
import Placeholder from "../../assets/Images/Placeholder.webp"
import { testimonials } from "../../data"

const Testimonials = () => {
  return (
    <Section id="testimonials" className={'bg-blue-500 px-20 dark:bg-blue-500'}>
      <Container className="grid sm:grid-cols-2 gap-8">
        {testimonials.map(testimonial => {
          return (
            <Testimonial
              key={testimonial.name}
              id={testimonial.id}
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