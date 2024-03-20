
import { Fragment } from "react"
import Section from "../components/Templates/Section"
import Container from "../components/Templates/Container"
import Navbar from "../components/Sections/Navbar"
import Footer from "../components/Sections/Footer"
import { articulosBlog } from "../data"
import Spacing from "../components/Sections/Spacing"
import { useParams, Link } from "react-router-dom"
import ReturnButton from "../components/ReturnButton"

const Article = () => {

  let { id } = useParams()
  let articuloContenido = articulosBlog.find(articulo => articulo.id == id)
  console.log(articuloContenido)
  return (
    <Fragment>
      <Navbar />
      <Section className="mt-24 min-h-screen" id="inicio">
        <Container className="flex justify-between gap-2 lg:gap-12 flex-wrap" id={id}>
          <div className="sm:w-[58%]">
            <h1 className="text-3xl mb-12 text-blue-900">{articuloContenido.titulo}</h1>
            <figure className="mb-12 text-sm">
              <img src={articuloContenido.imagen} alt="imagen de blog" className="object-cover w-full h-[200px]" />
              <figcaption>Fuente: Pexels.com</figcaption>
            </figure>
            <p>{articuloContenido.extracto}</p>
          </div>
          <aside className="sm:w-[40%] lg:w-[320px] px-6 pb-8 flex flex-col gap-6 bg-slate-300 py-8 rounded-lg border-2 border-blue-800">
            <h2 className="text-2xl">Articulos anteriores</h2>
            <Spacing distance="mb-0" />
            {articulosBlog.map((articulo) => {
              return (
                <Link to={`/blog/${articulo.id}`} key={articulo.id}>
                  <div className="mx-auto border-1 border-gray-400 rounded-md shadow-xl animate__animated animate__flipInY flex min:h-[200px] w-[75vw] sm:flex-col sm:w-[100%] sm:h-auto">
                    <img src={articulo.imagen} alt="image" className="rounded-t-md w-1/2 sm:w-full object-cover" />
                    <div className="px-6 py-4 bg-slate-200 rounded-b-md justify-center ">
                      <h3 className='text-sm tlgext-pretty font-semibold text-blue-800'>{articulo.titulo}</h3>
                      <br />
                      <p className='text-xs text-gray-800'>{articulo.extracto}</p>
                      <br />
                    </div>
                  </div>
                </Link>
              )
            })}
          </aside>
        </Container>
      </Section >
      <ReturnButton />
      <Footer />
    </Fragment >
  )
}

export default Article