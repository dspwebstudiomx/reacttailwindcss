import Container from "../Templates/Container"
import Section from "../Templates/Section"

const ClientCarousel = () => {

  const slides = document.querySelector(".carousel-slide")
  const prevButton = document.querySelector(".carousel-prev")
  const nextButton = document.querySelector(".carousel-next")

  let currentSlide = 0

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.display = i === index ? "block" : "none";
    });
    currentSlide = index
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length)
  }

  function prevSlide() {
    showSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)
  }

  prevButton.addEventListener("Click", prevSlide)
  nextButton.addEventListener("Click", nextSlide)

  showSlide(currentSlide);

  return (
    <Section id="clients" classNameName="bg-slate-400">
      <Container>
        <div className="carousel-container">
          <div className="carousel-slide">
            <img src="https://via.placeholder.com/500x300/f00/fff" alt="Slide 1" />
          </div>
          <div className="carousel-slide">
            <img src="https://via.placeholder.com/500x300/0f0/fff" alt="Slide 2" />
          </div>
          <div className="carousel-slide">
            <img src="https://via.placeholder.com/500x300/00f/fff" alt="Slide 3" />
          </div>
          <button className="carousel-prev">Previous</button>
          <button className="carousel-next">Next</button>
        </div>
      </Container>
    </Section>
  )
}

export default ClientCarousel