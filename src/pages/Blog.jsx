import { articulosBlog } from '../data'
import { useState } from 'react';
import ButtonArticleList from '../components/Atoms/Buttons/ButtonArticleList'
import ArticleCardGenerator from '../components/Molecules/ArticleCardGenerator'
import Navbar from '../components/Sections/Navbar'
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
import backgrooundSectionImage from '../assets/Images/blogContacto.webp'

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

  return (
    <div id="scrollTop">
      <header>
        <Navbar />
      </header>
      <ScrollToTop />
      <main id='blog' className='mt-20'>
        <HeroBlog />
        <Banner className={'py-8 flex gap-8 justify-center text-lg cursor-pointer'} >
          <ButtonArticleList categorias={categorias} filtrarCategoria={filtrarCategoria} />
        </Banner>
        <Section>
          <Container className={'grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-between gap-8 py-16'}>
            <ArticleCardGenerator articulos={articulos} />
          </Container>
        </Section>
        <BackgroundSection opacity={'opacity-65'} background={backgrooundSectionImage} >
          <h2 className='text-3xl'>¿Gustas que toque algún tema de tu interés?</h2>
          <p className='text-lg'>No dudes en contactarme para poder así generar el artículo solicitado.</p>
          <Spacing distance='mb-3' />
          <ButtonScroll name={'Contáctame'} to={'/contacto'} />
        </BackgroundSection>
      </main>
      <Footer />
      <ReturnButton />
    </div>
  )
}

export default Blog