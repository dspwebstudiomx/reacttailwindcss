import { articulosBlog } from '../data'
import { useState } from 'react';
import ButtonArticleList from '../components/Atoms/Buttons/ButtonArticleList';
import ArticleCardGenerator from '../components/Molecules/ArticleCardGenerator';
import Navbar from '../components/Sections/Navbar';
import HeroBlog from './Blog/HeroBlog';
import Banner from '../components/Sections/Banner'
import Section from '../components/Templates/Section';
import Container from '../components/Templates/Container';

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
    <>
      <header>
        <Navbar />
      </header>
      <main id='blog' className='mt-20'>
        <HeroBlog />
        <Banner className={'flex gap-8 justify-center items-center'}>
          <ButtonArticleList categorias={categorias} filtrarCategoria={filtrarCategoria} />
        </Banner>
        <Section>
          <Container className={'grid md:grid-cols-4 place-content-center gap-8'}>
            <ArticleCardGenerator articulos={articulos} />
          </Container>
        </Section>
      </main>

    </>
  )
}

export default Blog