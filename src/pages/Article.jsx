import { useParams, Link } from "react-router-dom"
import Section from "../components/Templates/Section"
import Container from "../components/Templates/Container"
import Navbar from "../components/Sections/Navbar"
import Footer from "../components/Sections/Footer"
import Spacing from "../components/Sections/Spacing"
import ReturnButton from "../components/Atoms/Buttons/ReturnButton"
import ButtonScroll from "../components/Atoms/Buttons/ButtonScroll"
import ButtonContainer from "../components/Templates/ButtonContainer"
import { articulosBlog } from "../data"
import { FaArrowRotateLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { TbClockEdit } from "react-icons/tb";
import { HashLink } from "react-router-hash-link"

const Article = () => {

  let { id } = useParams()
  let articuloContenido = articulosBlog.find(articulo => articulo.id == id)
  let linkAnterior = parseInt(id) - 1
  let linkPosterior = parseInt(id) + 1
  let ultimoContenido = articulosBlog[articulosBlog.length - 1].id
  let primerContenido = articulosBlog[0].id

  const scrollWithOffset = (element, offset) => {
    const elementPosition = element.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  }

  const classes = {
    section: "mt-0 min-h-screen xl:px-0 sm:px-12",
    container: "flex justify-between gap-2 flex-wrap py-20",
    contenedorIzquierdo: "sm:w-[53%] flex flex-col min-h-[100vh] w-full place-content-between",
    contenedorDerecho: "sm:w-[40%] lg:w-[320px] flex flex-col gap-6 bg-slate-300 p-6 rounded-lg border-2 border-blue-800 mt-10 sm:mt-0 py-14 text-slate-800 max-h-[1070px]"
  }
  return (
    <div id="scrollTop">
      <Navbar />
      <Section className={classes.section} id="article">
        <Container className={classes.container} id={id}>

          {/*  Contenedor izquierdo */}
          <div className={classes.contenedorIzquierdo}>
            {/* Contenido */}
            <div>
              <header>
                <h1 className="text-4xl text-blue-900 dark:text-slate-200">{articuloContenido.titulo}</h1>
                {/* Datos del creador */}
                <div className="mb-12 flex lg:items-center lg:justify-between my-4 flex-wrap leading-loose flex-col lg:flex-row">
                  <div className="flex items-center">
                    <IoPersonCircleOutline size={24} color="#1D4ED8" /><span className="mx-1 font-normal">Autor:</span>{articuloContenido.autor}
                  </div>
                  <div className="mx-1 items-center hidden lg:block">|</div>
                  <div className="flex items-center">
                    <FaRegBookmark size={18} color="#1D4ED8" /><span className="mx-1 font-normal">Categoría:</span>{articuloContenido.categoria}
                  </div>
                  <div className="mx-1 items-center hidden lg:block">|</div>
                  <div className="flex items-center">
                    <TbClockEdit size={22} color="#1D4ED8" /><span className="mx-1 font-normal">Fecha:</span>{articuloContenido.fecha}
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
              <ButtonContainer distancia="mt-12">

                <HashLink to={`/blog/${linkAnterior}`} scroll={element => scrollWithOffset(element, 98)}>
                  <button type='button' className={articuloContenido.id === primerContenido ? "hidden" : 'rounded-lg text-white border-2  text-xl sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[320px] md:w-[182px] lg:w-[170px] h-[70px] mx-auto'}>
                    <span className={`mr-2 flex flex-row-reverse`}><FaArrowLeft /></span>
                    Anterior
                  </button>
                </HashLink >
                <HashLink to={`/blog/${linkPosterior}`} scroll={element => scrollWithOffset(element, 98)}>
                  <button type='button' className={articuloContenido.id === ultimoContenido ? "hidden" : 'rounded-lg text-white border-2  text-xl sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[320px] md:w-[182px] lg:w-[170px] h-[70px] mx-auto flex-row-reverse'}>
                    <span className={`ml-2`}><FaArrowRight /></span>
                    Siguiente
                  </button>
                </HashLink >
                <ButtonScroll
                  to={`/blog`}
                  name="Ver todos"
                  icono={<FaArrowRotateLeft />}
                />
              </ButtonContainer>
              {/* Botones de Navegación */}
              {/* Contenido */}
            </div>
            {/*  Contenedor izquierdo */}
          </div>
          {/* Contenedor Derecho */}
          <aside className={classes.contenedorDerecho} >
            <h2 className="text-2xl text-center">Articulos más recientes</h2>
            <Spacing distance="mb-0" />
            <div className="flex gap-8 flex-col">
              {articulosBlog.slice(-2).reverse().map(
                (articulo) => {
                  return (
                    <Link to={`/blog/${articulo.id}`} key={articulo.id}>
                      <article className="relate mx-auto border-1 border-gray-400 rounded-md shadow-xl animate__animated animate__flipInY flex w-[75vw] sm:flex-col sm:w-[100%]">
                        <img src={articulo.imagen} alt="image" className="rounded-t-md w-1/3 sm:w-full object-cover md:h-[150px] " />
                        <div className="px-6 py-10 bg-slate-200 flex flex-col gap-3 rounded-b-md w-2/3 sm:w-full min-h-[180px] justify-start overflow-hidden">
                          <h3 className="text-lg text-blue-800 leading-tight">{articulo.titulo}</h3>
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
                        <div id={`Bubble-${articulo.id}`} className="absolute -top-2 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white text-sm shadow-lg rounded-bl-lg rounded-tr-lg border-2 border-blue-500 min-w-[120px] text-center">{articulo.categoria}</div>
                        {/* Bubble */}

                      </article>
                    </Link>
                  )
                }
              )}
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