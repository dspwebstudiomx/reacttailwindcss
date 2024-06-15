import { articulosBlog } from '../data'
import { useState } from 'react';
import ButtonArticleList from '../components/Atoms/Buttons/ButtonArticleList'
import ArticleCardGenerator from '../components/Molecules/ArticleCardGenerator'
import Navbar from '../components/Sections/Navbar'
import image from '../assets/Images/blog.webp'
import HeroBlog from './Blog/HeroBlog'
import Banner from '../components/Sections/Banner'
import Section from '../components/Templates/Section'
import Container from '../components/Templates/Container'
import Footer from '../components/Sections/Footer'
import ReturnButton from '../components/Atoms/Buttons/ReturnButton'
import ScrollToTop from '../Functions/ScrolltoTop'
import BackgroundSection from '../components/Molecules/BackgroundSection'
import ButtonScroll from '../components/Atoms/Buttons/ButtonScroll'
import Spacing from '../components/Sections/Spacing'
import backgroundSectionImage from '../assets/Images/blogContacto.webp'
// import useTitle from '../Functions/Hooks/useTitle';
import { HelmetProvider } from 'react-helmet-async';
import SEOFriendly from '../Functions/SEOFriendly';

const Blog = () => {

  const allCategories = ["Todas", ...new Set(articulosBlog.map(articulo => articulo.categoria))]
  const [categorias] = useState(allCategories)
  const [articulos, setArticulos] = useState(articulosBlog)

  const filtrarCategoria = (categoria) => {
    if (categoria === "Todas") {
      setArticulos(articulosBlog);
      return;
    }
    const filterDataCategory = articulosBlog.filter(articulo => articulo.categoria == categoria)
    setArticulos(filterDataCategory)
  }

  // useTitle({ title: 'Blog' })

  return (
    <HelmetProvider>
      <SEOFriendly
        linkHref={'blog'}
        title={'Blog | dspwebstudio'}
        description={'Artículos de Interés sobre Diseño y Desarrollo Web'}
        author={'dspwebstudio'}
        keywords={'articulo, blog, blog tecnología, articulo Desarrollo Web, articulo Diseño Web'}
        type={'blog'}
        image={image}
      />
      <div id="scrollTop">
        <header>
          <Navbar />
        </header>
        <ScrollToTop />
        <main id='blog' className='mt-20 dark:bg-slate-800 bg-slate-300'>
          <HeroBlog image={image} />
          <Banner className={'p-6 sm:py-6 sm:px-0 gap-4 text-lg sm:text-base cursor-pointer grid grid-cols-2 md:grid-cols-5 sm:place-items-center sm:mr-3'} >
            <ButtonArticleList categorias={categorias} filtrarCategoria={filtrarCategoria} />
          </Banner>
          <Section>
            <Container className={'grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-6 gap-y-8 sm:gap-y-12 py-6 px-0'}>
              <ArticleCardGenerator articulos={articulos} />
            </Container>
          </Section>
          <BackgroundSection opacity={'opacity-65'} background={backgroundSectionImage}>
            <div className='p-12 flex flex-col gap-6'>
              <h2 className='text-3xl'>¿Gustas que toque algún tema de tu interés?</h2>
              <p className='text-lg'>No dudes en contactarme para poder así generar el artículo solicitado.</p>
              <Spacing distance='mb-3' />
              <ButtonScroll name={'Contáctame'} to={'/contacto'} />
            </div>
          </BackgroundSection>
        </main>
        <Footer />
        <ReturnButton />
      </div>
    </HelmetProvider>
  )
}

export default Blog