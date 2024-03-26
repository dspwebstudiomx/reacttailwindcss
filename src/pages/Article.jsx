
import Section from "../components/Templates/Section"
import Container from "../components/Templates/Container"
import Navbar from "../components/Sections/Navbar"
import Footer from "../components/Sections/Footer"
import { articulosBlog } from "../data"
import Spacing from "../components/Sections/Spacing"
import { useParams, Link } from "react-router-dom"
import ReturnButton from "../components/ReturnButton"
import { FaArrowRotateLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import ArticleCardGenerator from "../ArticleCardGenerator"
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { TbClockEdit } from "react-icons/tb";

const Article = () => {

  let { id } = useParams()
  let articuloContenido = articulosBlog.find(articulo => articulo.id == id)
  console.log(articuloContenido)

  const linkAnterior = parseInt(id) - 1
  const linkPosterior = parseInt(id) + 1

  const classes = {
    section: "mt-20 min-h-screen",
    container: "flex justify-between gap-2 lg:gap-12 flex-wrap",
    content: "sm:w-[58%] mb-20 flex-col w-full h-auto place-content-between bg-red-200",
    aside: "sm:w-[40%] lg:w-[320px] px-6 pb-8 flex flex-col gap-6 bg-slate-300 py-8 rounded-lg border-2 border-blue-800 max-h-[840px] overflow-hidden"
  }
  return (
    <div id="scrollTop">
      <Navbar />
      <Section className={classes.section}>
        <Container className={classes.container} id={id}>

          {/*  Contenedor izquierdo */}
          <div className="sm:w-[58%] mb-20 flex flex-col min-h-[100vh] w-full place-content-between">
            {/* Contenido */}
            <div>
              <header>
                <h1 className="text-4xl text-blue-900">{articuloContenido.titulo}</h1>
                <div className="mb-12 flex items-center justify-between my-4 flex-wrap leading-loose">
                  <div className="flex items-center">
                    <IoPersonCircleOutline size={24} color="#1D4ED8" /><span className="mx-1 font-medium">Autor:</span>{articuloContenido.autor}
                  </div>
                  <div className="mx-3 flex items-center">|</div>
                  <div className="flex items-center">
                    <FaRegBookmark size={18} color="#1D4ED8" /><span className="mx-1 font-medium">Categoría:</span>{articuloContenido.categoria}
                  </div>
                  <div className="mx-3 flex items-center">|</div>
                  <div className="flex items-center">
                    <TbClockEdit size={22} color="#1D4ED8" /><span className="mx-1 font-medium">Fecha:</span>{articuloContenido.fecha}
                  </div>
                </div>
                <figure className="mb-12 text-sm">
                  <img src={articuloContenido.imagen} alt="imagen de blog" className="object-cover w-full h-[250px]" />
                  <figcaption>Fuente: Pexels.com</figcaption>
                </figure>
              </header>
              <p>{articuloContenido.extracto}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-6 gap-4 mt-20">
                <Link to={`/blog/${linkAnterior}`} >
                  <button className="text-slate-100 text-lg flex items-center justify-center bg-blue-600 px-3 py-4 rounded-lg hover:bg-blue-800 w-full">
                    <FaArrowLeft className="mr-1" />Artículo Anterior
                  </button>
                </Link>
                <Link to={`/blog/${linkPosterior}`} >
                  <button className="text-slate-100 text-lg flex items-center justify-center bg-blue-600 px-3 py-4 rounded-lg hover:bg-blue-800 w-full">
                    Siguiente Artículo<FaArrowRight className="ml-1" />
                  </button>
                </Link>
                <Link to={"/blog"} >
                  <button className="text-slate-100 text-lg flex items-center justify-center bg-blue-600 px-3 py-4 rounded-lg hover:bg-blue-800 w-full">
                    <FaArrowRotateLeft className="mr-1" />Regresar al Blog
                  </button>
                </Link>
              </div>
            </div>
            {/* Contenido */}
          </div>
          {/*  Contenedor izquierdo */}

          {/* Contenedor Derecho */}
          <aside className={classes.aside} >
            <h2 className="text-2xl text-center">Articulos más recientes</h2>
            <Spacing distance="mb-0" />
            <div className="flex flex-col-reverse gap-8">
              <ArticleCardGenerator />
            </div>
          </aside>
          {/* Contenedor Derecho */}

        </Container>
      </Section>
      <ReturnButton />
      <Footer />
    </div >
  )
}

export default Article