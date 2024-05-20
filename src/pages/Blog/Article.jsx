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
import { IoCalendarOutline, IoPersonCircleOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa6";
import { TbClockEdit } from "react-icons/tb";
import { HashLink } from "react-router-hash-link"
import BackgroundSection from "../../components/Molecules/BackgroundSection"
import Spacing from "../../components/Sections/Spacing"
import backgrooundSectionImage from '../../assets/Images/blogContacto.webp'

// import ArticleCardGenerator from "../../components/Molecules/ArticleCardGenerator"
// import Spacing from "../../components/Sections/Spacing"
// import PageSubtitle from "../../components/Molecules/PageSubtitle"
// import { FaHome } from "react-icons/fa"

const Article = ({ id, title, author, category, date, image, children, source, time }) => {

  const scrollWithOffset = (element, offset) => {
    const elementPosition = element.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  }

  let ultimoContenido = articulosBlog[articulosBlog.length - 1].id
  const linkAnterior = parseInt(id) - 1
  const linkPosterior = parseInt(id) + 1

  const classes = {
    section: "mt-0 xl:min-xl-screen xl:px-0 sm:px-12 bg-slate-200",
    container: "flex justify-between gap-12 xl:gap-20 py-32 flex-col sm:flex-row text-xl justify-between",
    contenedorIzquierdo: "flex flex-col w-full sm:w-2/3",
    contenedorDerecho: "bg-slate-300 rounded-lg border-2 border-blue-800 mt-10 sm:mt-0 py-8 text-slate-800 h-auto md:max-h-[1500px] sm:w-2/3 xl:w-[280px] bg-slate-300"
  }

  return (
    <div id="scrollTop">
      <Navbar />
      <Section className={classes.section} id="article">
        <Container className={classes.container}>

          {/*  Contenedor izquierdo */}
          <div className={classes.contenedorIzquierdo}>
            {/* Contenido */}
            <header>
              <h1 className='text-3xl text-blue-800 font-semibold'>{title}</h1 >
              <br />
              <div id="dataCreation" className="grid grid-cols-2 lg:grid-cols-4 text-sm gap-2 justify-between">
                <h4 className="flex items-center"><span className="mr-1 text-blue-800">{<IoCalendarOutline />}</span>Fecha: {date}</h4>
                <h4 className="flex items-center"><span className="mr-1 text-blue-800">{<FaRegBookmark />}</span>Categoria: {category}</h4>
                <h4 className="flex items-center"><span className="mr-1 text-blue-800">{<IoPersonCircleOutline />}</span>Autor: {author}</h4>
                <h4 className="flex items-center"><span className="mr-1 text-blue-800">{<TbClockEdit />}</span>Tiempo: {time}</h4>
              </div>
              <br />
              <figure>
                <img src={image} alt="image blog" className="h-[220px] w-full overflow-hidden object-cover" />
                <a href={`https://${source}`} target="_blank">
                  <figcaption className="text-sm font-semibold mt-1"><span className="mr-1">Fuente:</span>{source}</figcaption>
                </a>
              </figure>
            </header>
            <main className="py-16 text-xl sm:text-base">
              {children}
            </main>
            <footer>
              {/* Botones de Navegación */}
              <ButtonContainer distancia="mt-4">
                <HashLink to={`/blog/${linkAnterior}`} scroll={element => scrollWithOffset(element, 98)} className={id == 1 ? "hidden" : "block"}>
                  <button type='button' className='rounded-lg text-white border-2  text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-2/3 md:w-[182px] lg:w-[170px] h-[80px] sm:h-[60px] mx-auto border-blue-900 shadow-2xl'>
                    <span className={`mr-2 flex flex-row-reverse`}><FaArrowLeft /></span>
                    Anterior
                  </button>
                </HashLink >
                <HashLink to={`/blog/${linkPosterior}`} scroll={element => scrollWithOffset(element, 98)} className={id == ultimoContenido ? "hidden" : "block"} >
                  <button type='button' className='rounded-lg text-white border-2  text-lg sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-2/3 md:w-[182px] lg:w-[170px] h-[70px] sm:h-[60px] mx-auto border-blue-900'>
                    Siguiente
                    <span className={`ml-2`}><FaArrowRight /></span>
                  </button>
                </HashLink >
                <ButtonScroll
                  to={`/blog`}
                  name="Ver todos"
                  iconLeft={<FaArrowRotateLeft />}
                />
                {/* <HashLink to={'/'} scroll={element => scrollWithOffset(element, 98)}>
                  <button type='button' className={'rounded-lg text-white border-2  text-xl sm:text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[320px] md:w-[182px] lg:w-[170px] h-[60px] mx-auto'}>
                    <span className={`mr-2`}><FaHome /></span>
                    Inicio
                  </button>
                </HashLink > */}
              </ButtonContainer>
              {/* Botones de Navegación */}

              {/* <Spacing distance="mb-20" />
              <section>
                <PageSubtitle subtitle="Artículos Relacionados" />
                <div className="grid sm:grid-cols-3 justify-start mt-12">

                </div>
              </section> */}
            </footer>
            {/* Contenido */}
          </div>
          {/*  Contenedor izquierdo */}

          {/* Contenedor Derecho */}
          <aside className="w-full sm:max-w-[320px]">
            <section className={classes.contenedorDerecho} id="articulos-anteriores">
              <h2 className="text-xl text-center px-5">Articulos más recientes</h2>
              <div className="grid gap-12 p-6 py-12">
                {articulosBlog.map(
                  (articulo) => {
                    return (
                      <Link to={`/blog/${articulo.id}`} key={articulo.id}>
                        <article className="flex mx-auto border-1 border-gray-400 rounded-md shadow-xl animate__animated animate__flipInY flex-col w-[85%] sm:flex-col sm:w-[100%]">
                          <img src={articulo.imagen} alt="image" className="rounded-t-md w-full object-cover h-[120px] md:h-[100px] " />
                          <div className="px-6 py-6 bg-slate-200 flex flex-col gap-1 rounded-b-md w-full min-h-[160px] justify-center overflow-hidden">
                            <h3 className="text-base font-semibold sm:text-xs xl:text-sm text-blue-800 leading-tight">{articulo.titulo}</h3>
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
                          <div id={`Bubble-${articulo.id}`} className="absolute -top-2 -right-1 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white text-xs shadow-lg rounded-bl-lg rounded-tr-lg border-2 border-blue-500 min-w-[120px] text-center">{articulo.categoria}</div>
                          {/* Bubble */}

                        </article>
                      </Link>
                    )
                  }
                ).slice(-4).reverse()}
              </div>
            </section>
            <Spacing distance="mb-12" />
            <section id="preguntar-tema-interes">
              <BackgroundSection opacity={'opacity-65'} background={backgrooundSectionImage} className={'max-h-[420px] rounded-lg border-2 border-black shadow-2xl xl:w-[87%]'} >
                <div className=" px-0 sm:px-6">
                  <h2 className='text-2xl'>¿Gustas que toque algún tema de tu interés?</h2>
                  <br />
                  <p className='text-xl sm:text-base'>No dudes en contactarme para poder así generar el artículo solicitado.</p>
                  <Spacing distance='mb-3' />
                  <br />
                  <ButtonScroll name={'Contáctame'} to={'/contacto'} />
                </div>
              </BackgroundSection>
            </section>
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
  time: PropTypes.string,
  idTitle: PropTypes.string,
  source: PropTypes.string,
  title: PropTypes.string,
  imageLink: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.any,
}

export default Article