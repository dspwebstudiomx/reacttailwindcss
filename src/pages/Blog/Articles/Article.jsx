import PropTypes from 'prop-types'
import Container from '../../../components/Templates/Container'
import Section from '../../../components/Templates/Section'
import Navbar from '../../../components/Sections/Navbar'
import Footer from '../../../components/Sections/Footer'
import ReturnButton from '../../../components/Atoms/Buttons/ReturnButton'
import ButtonScroll from '../../../components/Atoms/Buttons/ButtonScroll'
import ButtonContainer from '../../../components/Templates/ButtonContainer'
import { articulosBlog } from '../../../data'
import { FaArrowRotateLeft, FaArrowRight, FaArrowLeft } from 'react-icons/fa6';
import { IoCalendarClearOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { FaRegBookmark } from 'react-icons/fa6';
import { TbClockEdit } from 'react-icons/tb';
import { HashLink } from 'react-router-hash-link'
import BackgroundSection from '../../../components/Molecules/BackgroundSection'
import Spacing from '../../../components/Sections/Spacing'
import backgroundSectionImage from '../../../assets/Images/blogContacto.webp'
import Line from '../../../components/Sections/Line'
import Banner from '../../../components/Sections/Banner'
import { FaHome } from 'react-icons/fa'
import useTitle from '../../../Functions/Hooks/useTitle'
import ArticleCardGeneratorCategory from '../../../Functions/ArticleCardGeneratorCategory'
import Pagination from '../../../Functions/Pagination'
import { Fragment, useState } from 'react'
import BlogCard from '../../../components/Molecules/BlogCard'
import { Link } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import SEOFriendly from '../../../Functions/SEOFriendly'

const Article = ({ id, title, author, category, date, image, children, source, time, slug, linkHref, description, keywords, image_240, image_480, image_576, image_768, image_1024, image_1200 }) => {

  useTitle({ title: title })


  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(4)
  const lastPostIndex = currentPage * postsPerPage  //1*4=4
  const firstPostIndex = lastPostIndex - postsPerPage //4-4
  const Category = articulo => articulo.categoria === category
  const currentPosts = articulosBlog.filter(Category).slice(firstPostIndex, lastPostIndex)

  const scrollWithOffset = (element, offset) => {
    const elementPosition = element.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: 'smooth',
    });
  }


  let ultimoContenido = articulosBlog[articulosBlog.length - 1].id
  // const linkAnterior = parseInt(id) - 1
  // const linkPosterior = parseInt(id) + 1

  let ultimoArticulo = articulosBlog.find(article => article.id == ultimoContenido)

  // const articuloID = articulosBlog.find((article) => article.id === id)
  let articuloAnterior = articulosBlog.find((article) => article.id >= id - 1);
  let articuloSiguiente = articulosBlog.find((article) => article.id == id + 1)

  function escanearUltimoContenido() {
    if (id == ultimoContenido) {
      articuloSiguiente = articulosBlog.find((article) => article.id == id)
    } else
      articuloSiguiente = articulosBlog.find((article) => article.id === id + 1)
  }
  escanearUltimoContenido()


  const classes = {
    container: 'flex justify-between gap-12 sm:gap-8 xl:gap-20 py-0 flex-col sm:flex-row text-xl justify-between',
    contenedorIzquierdo: 'flex flex-col w-full sm:w-[55%] md:w-[50%] lg:w-[60%]',
    contenedorDerecho: 'bg-slate-300 rounded-lg border-2 border-blue-800 mt-10 sm:mt-0 py-14 pb-0 px-8 sm:px-0 h-auto bg-slate-300 dark:bg-slate-900'
  }

  return (
    <Fragment>
      <HelmetProvider>
        <SEOFriendly
          linkHref={linkHref}
          title={title}
          description={description}
          author={author}
          keywords={keywords}
          type={'article:tag'}
          image={image}
        />
      </HelmetProvider>
      <Navbar />
      <div id='scrollTop'>

        <Banner className={'mt-24 py-8'}>
          <Link to={`/blog/${slug}`}>
            <h3 className='font-semibold text-center text-2xl uppercase tracking-wider'>{category} </h3>
          </Link>
        </Banner>

        <Section id='article' className={'bg-slate-200 dark:bg-slate-800 dark:text-slate-100 md:px-12'}>

          {/* Sección artículos */}
          <Container className={classes.container}>

            {/*  Contenedor izquierdo */}
            <div className={classes.contenedorIzquierdo}>
              {/* Contenido */}
              <header>
                <h1 className='text-3xl text-blue-800 dark:text-blue-500 font-semibold'>{title}</h1 >
                <br />
                <div id='dataCreation' className='grid grid-cols-2 lg:grid-cols-2 gap-2 justify-between text-sm w-full xl:w-4/6'>
                  <h4 className='flex items-center'><span className='mr-1 text-blue-800 dark:text-blue-500 font-bold'>{<IoCalendarClearOutline />}</span><span className='mx-1 font-medium'>Fecha:</span>{date}</h4>
                  <h4 className='flex items-center'><span className='mr-1 text-blue-800 dark:text-blue-500 font-bold'>{<FaRegBookmark />}</span><span className='mx-1 font-medium'>Categoría:</span><Link to={`/blog/${slug}`} className='hover:text-blue-700'>{category}</Link></h4>
                  <h4 className='flex items-center'><span className='mr-1 text-blue-800 dark:text-blue-500 font-bold'>{<IoPersonCircleOutline />}</span><span className='mx-1 font-medium'>Autor:</span>{author}</h4>
                  <h4 className='flex items-center'><span className='mr-1 text-blue-800 dark:text-blue-500 font-bold'>{<TbClockEdit />}</span><span className='mx-1 font-medium'>Tiempo:</span>{time}</h4>
                </div>
                <br />
                <figure>
                  <img
                    src={image_240}
                    srcSet={`
                      ${image_480} 2x,
                      ${image_576} 3x,
                      ${image_768} 4x,
                      ${image_1024} 5x,
                      ${image_1200} 6x,
                      `}
                    alt={image_240}
                    className='overflow-hidden object-cover w-full h-[220px]'
                    title={image_240 || image_768}
                  />
                </figure>
                <a href={`https://${source}`} target='_blank'>
                  <figcaption className='text-sm font-semibold mt-1'><span className='mr-1'>Fuente:</span>{source}</figcaption>
                </a>
              </header>
              <main className='py-12 text-lg sm:text-base'>
                {children}
              </main>
              {/* Contenido */}
              <footer>
                {/* Botones de Navegación */}
                <ButtonContainer distancia='mt-4'>
                  <HashLink to={`/blog/${articuloAnterior.idCategoria}/${articuloAnterior.idTitle}`} scroll={element => scrollWithOffset(element, 98)} className={id === 1 ? 'hidden' : 'block'}>
                    <button type='button' className='rounded-lg text-white border-2  text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[70%] md:w-[150px] lg:w-[170px] h-[80px] sm:h-[60px] mx-auto border-white shadow-2xl'>
                      <span className={`mr-2 flex flex-row-reverse`}><FaArrowLeft /></span>
                      Anterior
                    </button>
                  </HashLink >

                  <HashLink to={`/blog/${articuloSiguiente.idCategoria}/${articuloSiguiente.idTitle}`} scroll={element => scrollWithOffset(element, 98)} className={id == ultimoArticulo ? 'hidden' : 'block'} >
                    <button type='button' className='rounded-lg text-white border-2  text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[70%] md:w-[150px] lg:w-[170px] h-[80px] sm:h-[60px] mx-auto border-white shadow-2xl'>
                      Siguiente
                      <span className={`ml-2`}><FaArrowRight /></span>
                    </button>
                  </HashLink >

                  <ButtonScroll
                    to={`/blog`}
                    name='Ver todos'
                    iconLeft={<FaArrowRotateLeft />}
                  />
                </ButtonContainer>
                {/* Botones de Navegación */}
              </footer>
              {/* Contenido */}
            </div>
            {/*  Contenedor izquierdo */}

            {/* Contenedor Derecho */}
            <aside className='w-full sm:max-w-[320px]'>

              {/* Artículos Recientes */}
              <section className={classes.contenedorDerecho} id='articulos-anteriores'>
                <h2 className='text-3xl sm:text-lg md:text-lg font-semibold text-center px-2 dark:text-slate-100 text-blue-900'>Articulos más recientes</h2>
                <div className='grid grid-cols-2 sm:grid-cols-1 gap-8 sm:px-0 py-12 mx-auto'>
                  {articulosBlog.map(
                    (articulo) => {
                      return (
                        <BlogCard
                          key={articulo.id}
                          id={articulo.id}
                          titulo={articulo.titulo}
                          fecha={articulo.fecha}
                          autor={articulo.autor}
                          categoria={articulo.categoria}
                          imagen={articulo.imagen}
                          image240={articulo.image240}
                          image480={articulo.image480}
                          image576={articulo.image576}
                          tiempo={articulo.tiempo}
                          idCategoria={articulo.idCategoria}
                          idTitle={articulo.idTitle}
                        />
                      )
                    }
                  ).slice(-4).reverse()}
                </div>
              </section>
              {/* Artículos Recientes */}

              <Spacing distance='mb-12' />

              {/* Recomendar tema */}
              <section id='recomendar-tema-interes'>
                <BackgroundSection opacity={'opacity-65'} background={backgroundSectionImage} className={'h-aut0 rounded-lg shadow-2xl md:w-full w-[210px]'} >
                  <div className='py-12 px-6'>
                    <h2 className='text-2xl'>¿Gustas que toque algún tema de tu interés?</h2>
                    <br />
                    <p className='text-lg sm:text-base'>No dudes en contactarme para poder así generar el artículo solicitado.</p>
                    <Spacing distance='mb-3' />
                    <br />
                    <ButtonScroll name={'Contáctame'} to={'/contacto'} />
                  </div>
                </BackgroundSection>
              </section>
              {/* Recomendar tema */}

            </aside>
            {/* Contenedor Derecho */}

          </Container>
          {/* Sección artículos */}


          {/* Artículos Relacionados */}
          <Container className={'py-12 mt-20'}>
            <h2 className='text-center text-2xl font-semibold w-2/3 mx-auto sm:w-full'>Artículos Relacionados</h2>
            <Line width='w-2/5 sm:w-1/5' align={'mx-auto'} />
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 gap-y-8 sm:gap-x-2 sm:gap-y-20 pt-20 px-6'>
              <ArticleCardGeneratorCategory currentPosts={currentPosts} category={category} />
            </div>
            <div id='pagination' className='my-12'>
              <Pagination totalPosts={currentPosts.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} />
            </div>
            {/* Botón ir a inicio */}
            <div className='mt-4 mx-auto'>
              <HashLink to={'/'}>
                <button type='button' className={'rounded-lg text-white border-2  text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[70%] md:w-[150px] lg:w-[170px] h-[80px] sm:h-[60px] mx-auto border-white shadow-2xl'}>
                  <span className={`mr-2`}><FaHome /></span>
                  Inicio
                </button>
              </HashLink >
            </div>
            {/* Botón ir a inicio */}
          </Container>
          {/* Articulos Relacionados */}

        </Section>
        <ReturnButton />
      </div >
      <Footer />
    </Fragment>

  )
}
Article.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  image_240: PropTypes.string,
  image_480: PropTypes.string,
  image_576: PropTypes.string,
  image_768: PropTypes.string,
  image_1024: PropTypes.string,
  image_1200: PropTypes.string,
  children: PropTypes.node,
  source: PropTypes.string,
  time: PropTypes.string,
  slug: PropTypes.string,
  linkHref: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
}

export default Article