import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import Section from "../../components/Templates/Section"
import Container from "../../components/Templates/Container"
import Navbar from "../../components/Sections/Navbar"
import Footer from "../../components/Sections/Footer"
import ReturnButton from "../../components/Atoms/Buttons/ReturnButton"
import ButtonScroll from "../../components/Atoms/Buttons/ButtonScroll"
import ButtonContainer from "../../components/Templates/ButtonContainer"
import { articulosBlog } from "../../data"
import { FaArrowRotateLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { TbClockEdit } from "react-icons/tb";
import { HashLink } from "react-router-hash-link"
import { useEffect, useState } from "react"
import ArticleCardGenerator from "../../components/Molecules/ArticleCardGenerator"
import Spacing from "../../components/Sections/Spacing"
import PageSubtitle from "../../components/Molecules/PageSubtitle"
// import { FaHome } from "react-icons/fa"

const Article = ({ id, title, author, category, date, image, children, source }) => {

  const scrollWithOffset = (element, offset) => {
    const elementPosition = element.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  }
  // let articuloAuthor = articulosBlog.find(articulo => articulo.autor === author)
  let ultimoContenido = articulosBlog[articulosBlog.length - 1].id
  const linkAnterior = parseInt(id) - 1
  const linkPosterior = parseInt(id) + 1
  console.log("El último artículo es:", ultimoContenido)
  console.log("El id mostrado es:", id)
  console.log("El id de la data es:", articulosBlog.id)

  const classes = {
    section: "mt-0 min-h-screen xl:px-0 sm:px-12 bg-slate-200",
    container: "flex flex-0 justify-between gap-20 xl:gap-32 py-20 flex-col sm:flex-row text-xl",
    contenedorIzquierdo: "flex flex-col w-full sm:w-2/3",
    contenedorDerecho: "flex flex-col gap-6 bg-slate-300 rounded-lg border-2 border-blue-800 mt-10 sm:mt-0 py-10 text-slate-800 h-auto sm:w-1/3"
  }
  const [articulos, setArticulos] = useState(articulosBlog)

  const filtrarCategoria = (categoria) => {
    if (categoria === "Todas") {
      setArticulos(articulosBlog);
      return;
    }
    const filterDataCategory = articulosBlog.filter(articulo => articulo.categoria === categoria);
    setArticulos(filterDataCategory);
  }

  // Call the filtrarCategoria function with the "Diseño Web" category
  useEffect(() => {
    filtrarCategoria(category);
  });

  return (
    <div id="scrollTop">
      <Navbar />
      <Section className={classes.section} id="article">
        <Container className={classes.container}>

          {/*  Contenedor izquierdo */}
          <div className={classes.contenedorIzquierdo}>
            {/* Contenido */}
            <header>
              <h1 className='text-3xl text-blue-800 font-normal'>{title}</h1 >
              <br />
              <div id="dataCreation" className="flex flex-wrap sm:flex-row gap-2 sm:gap-4 text-lg sm:text-base">
                <h4 className="flex items-center"><span className="mr-1 text-blue-800">{<TbClockEdit />}</span>Fecha: {date}</h4>
                <h4 className="flex items-center"><span className="mr-1 text-blue-800">{<FaRegBookmark />}</span>Categoria: {category}</h4>
                <h4 className="flex items-center"><span className="mr-1 text-blue-800">{<IoPersonCircleOutline />}</span>Autor: {author}</h4>
              </div>
              <br />
              <figure>
                <img src={image} alt="image blog" className="h-[220px] w-full overflow-hidden object-cover" />
                <figcaption className="text-sm font-semibold mt-1"><span className="mr-1">Fuente:</span>{source}</figcaption>
              </figure>
            </header>
            <main className="py-16 text-xl sm:text-base">
              {children}
            </main>
            <footer>
              {/* Botones de Navegación */}
              <ButtonContainer distancia="mt-4">
                <HashLink to={`/blog/${linkAnterior}`} scroll={element => scrollWithOffset(element, 98)} className={id == 1 ? "hidden" : "block"}>
                  <button type='button' className='rounded-lg text-white border-2  text-xl sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-2/3 md:w-[182px] lg:w-[170px] h-[80px] sm:h-[60px] mx-auto border-blue-900 shadow-2xl'>
                    <span className={`mr-2 flex flex-row-reverse`}><FaArrowLeft /></span>
                    Anterior
                  </button>
                </HashLink >
                <HashLink to={`/blog/${linkPosterior}`} scroll={element => scrollWithOffset(element, 98)} className={id == ultimoContenido ? "hidden" : "block"} >
                  <button type='button' className='rounded-lg text-white border-2  text-xl sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-2/3 md:w-[182px] lg:w-[170px] h-[70px] sm:h-[60px] mx-auto border-blue-900'>
                    Siguiente
                    <span className={`ml-2`}><FaArrowRight /></span>
                  </button>
                </HashLink >
                <ButtonScroll
                  to={`/blog`}
                  name="Ver todos"
                  icono={<FaArrowRotateLeft />}
                />
                {/* <HashLink to={'/'} scroll={element => scrollWithOffset(element, 98)}>
                  <button type='button' className={'rounded-lg text-white border-2  text-xl sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[320px] md:w-[182px] lg:w-[170px] h-[60px] mx-auto'}>
                    <span className={`mr-2`}><FaHome /></span>
                    Inicio
                  </button>
                </HashLink > */}
              </ButtonContainer>
              {/* Botones de Navegación */}
              {/* <div>
                <h2 className="text-2xl text-center">Articulos más recientes</h2>

              </div> */}
              <Spacing distance="mb-20" />
              <section>
                <PageSubtitle subtitle="Artículos Relacionados" />
                <div className="grid sm:grid-cols-3 justify-start mt-12">
                  <ArticleCardGenerator articulos={articulos} />
                </div>
              </section>
            </footer>
            {/* Contenido */}
          </div>
          {/*  Contenedor izquierdo */}

          {/* Contenedor Derecho */}
          <aside className={classes.contenedorDerecho} >
            <h2 className="text-2xl text-center">Articulos más recientes</h2>
            <div className="flex gap-12 flex-col p-6">
              {articulosBlog.slice(-4).reverse().map(
                (articulo) => {
                  return (
                    <Link to={`/blog/${articulo.id}`} key={articulo.id}>
                      <article className="flex mx-auto border-1 border-gray-400 rounded-md shadow-xl animate__animated animate__flipInY flex-col w-[85%] sm:flex-col sm:w-[100%]">
                        <img src={articulo.imagen} alt="image" className="rounded-t-md w-full object-cover h-[120px] md:h-[100px] " />
                        <div className="px-6 py-6 bg-slate-200 flex flex-col gap-1 rounded-b-md w-full min-h-[160px] justify-center overflow-hidden">
                          <h3 className="text-base sm:text-sm text-blue-800 leading-tight">{articulo.titulo}</h3>
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
Article.propTypes = {
  children: PropTypes.node,
  id: PropTypes.number,
  source: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.any,
}

export default Article