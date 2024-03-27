
import Section from "../components/Templates/Section"
import Container from "../components/Templates/Container"
import Navbar from "../components/Sections/Navbar"
import Footer from "../components/Sections/Footer"
import { articulosBlog } from "../data"
import Spacing from "../components/Sections/Spacing"
import { useParams, Link } from "react-router-dom"
import ReturnButton from "../components/ReturnButton"
import { FaArrowRotateLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { TbClockEdit } from "react-icons/tb";

const Article = () => {

  let { id } = useParams()
  let articuloContenido = articulosBlog.find(articulo => articulo.id == id)
  console.log(articuloContenido)

  const linkAnterior = parseInt(id) - 1;
  const linkPosterior = parseInt(id) + 1;
  const listadoInverso = articulosBlog.reverse();
  console.log(listadoInverso)

  const classes = {
    section: "mt-10 min-h-screen",
    container: "flex justify-between gap-2 lg:gap-12 flex-wrap py-20",
    content: "sm:w-[58%] mb-20 flex-col w-full h-auto place-content-between bg-red-200",
    contenedorIzquierdo: "sm:w-[58%] flex flex-col min-h-[100vh] w-full place-content-between",
    contenedorDerecho: "sm:w-[40%] lg:w-[320px] flex flex-col gap-6 bg-slate-300 p-8 rounded-lg border-2 border-blue-800"
  }
  return (
    <div id="scrollTop">
      <Navbar />
      <Section className={classes.section}>
        <Container className={classes.container} id={id}>

          {/*  Contenedor izquierdo */}
          <div className={classes.contenedorIzquierdo}>
            {/* Contenido */}
            <div>
              <header>
                <h1 className="text-4xl text-blue-900">{articuloContenido.titulo}</h1>
                {/* Datos del creador */}
                <div className="mb-12 flex lg:items-center lg:justify-between my-4 flex-wrap leading-loose flex-col lg:flex-row">
                  <div className="flex items-center">
                    <IoPersonCircleOutline size={24} color="#1D4ED8" /><span className="mx-1 font-medium">Autor:</span>{articuloContenido.autor}
                  </div>
                  <div className="mx-2 items-center hidden lg:block">|</div>
                  <div className="flex items-center">
                    <FaRegBookmark size={18} color="#1D4ED8" /><span className="mx-1 font-medium">Categoría:</span>{articuloContenido.categoria}
                  </div>
                  <div className="mx-2 items-center hidden lg:block">|</div>
                  <div className="flex items-center">
                    <TbClockEdit size={22} color="#1D4ED8" /><span className="mx-1 font-medium">Fecha:</span>{articuloContenido.fecha}
                  </div>
                </div>
                {/* Datos del creador */}
                {/* Imagen del Artículo */}
                <figure className="mb-12 text-sm">
                  <img src={articuloContenido.imagen} alt="imagen de blog" className="object-cover w-full h-[250px]" />
                  <figcaption>Fuente: Pexels.com</figcaption>
                </figure>
                {/* Imagen del Artículo */}
              </header>
              <p>{articuloContenido.extracto}</p>
              {/* Botones de Navegación */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-6 gap-4 mt-20">
                <Link to={`/blog/${linkAnterior}`} >
                  <button className="text-slate-100 text-lg flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-6 rounded-lg hover:bg-blue-800 w-full">
                    <FaArrowLeft className="mr-1" />Artículo Anterior
                  </button>
                </Link>
                <Link to={`/blog/${linkPosterior}`} >
                  <button className="text-slate-100 text-lg flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-6 rounded-lg hover:bg-blue-800 w-full">
                    Siguiente Artículo<FaArrowRight className="ml-1" />
                  </button>
                </Link>
                <Link to={"/blog"} >
                  <button className="text-slate-100 text-lg flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-6 rounded-lg hover:bg-blue-800 w-full">
                    <FaArrowRotateLeft className="mr-1" />Regresar al Blog
                  </button>
                </Link>
              </div>
              {/* Botones de Navegación */}

            </div>
            {/* Contenido */}
          </div>
          {/*  Contenedor izquierdo */}

          {/* Contenedor Derecho */}
          <aside className={classes.contenedorDerecho} >
            <h2 className="text-2xl text-center">Articulos más recientes</h2>
            <Spacing distance="mb-0" />
            <div className="flex gap-8 flex-col">
              {articulosBlog.map(
                (articulo) => {
                  return (
                    <Link to={`/blog/${articulo.id}`} key={articulo.id}>
                      <article className="relate mx-auto border-1 border-gray-400 rounded-md shadow-xl animate__animated animate__flipInY flex w-[75vw] sm:flex-col sm:w-[100%]">
                        <img src={articulo.imagen} alt="image" className="rounded-t-md w-1/3 sm:w-full object-cover md:h-[150px] " />
                        <div className="px-6 py-10 bg-slate-200 flex flex-col gap-3 rounded-b-md w-2/3 sm:w-full min-h-[180px] justify-start overflow-hidden">
                          <h3 className='text-md font-semibold text-blue-800 leading-tight'>{articulo.titulo}</h3>
                          <div className="mt-3 flex flex-col gap-2">
                            <div className="flex items-center text-xs">
                              <TbClockEdit size={16} color="#1D4ED8" /><span className="mx-1 font-medium">Fecha:</span>{articulo.fecha}
                            </div>
                            <div className="flex items-center text-xs">
                              <IoPersonCircleOutline size={16} color="#1D4ED8" /><span className="mx-1 font-medium">Autor:</span>{articulo.autor}
                            </div>
                          </div>
                        </div>
                        {/* Bubble */}
                        <div id={`Bubble-${articulo.id}`} className="absolute -top-2 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white text-sm shadow-lg rounded-bl-lg rounded-tr-lg border-2 border-blue-500">{articulo.categoria}</div>
                        {/* Bubble */}

                      </article>
                    </Link>
                  )
                }
              ).slice(-2).reverse()}
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