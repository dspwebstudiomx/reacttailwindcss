import BackgroundSection from '../../components/Molecules/BackgroundSection'
import BlogSectionImage from '../../assets/Images/blog.webp'
import Spacing from '../../components/Sections/Spacing'
import ArticleCardGenerator from '../../components/Molecules/ArticleCardGenerator'
import { articulosBlog } from '../../data'
import { useState } from 'react'

const Blog = () => {
  const [articulos, setArticulos] = useState(articulosBlog)

  const filtrarCategorias = (categoria) => {
    if (categoria === "Todas") {
      setArticulos(articulosBlog);
      return;
    }
    const filterDataCategory = articulosBlog.filter(articulo => articulo.categoria == categoria)
    setArticulos(filterDataCategory)
  }

  return (
    <BackgroundSection background={BlogSectionImage} opacity='opacity-75' id={'blog'}>
      <div className='text-slate-100'>
        <h2 className='text-4xl text-center'>Visita mi Blog</h2>
        <Spacing distance='mb-8' />
        <p className='text-2xl'>Aquí encontrarás temas sobre Diseño Web, Desarrollo Web, Posicionamiento, tips y más.</p>
      </div>
      <Spacing distance='mb-20' />
      <div className='grid sm:grid-cols-3 xl:grid-cols-4 gap-12'>
        <ArticleCardGenerator articulos={articulos} />
      </div>
    </BackgroundSection>
  )
}
export default Blog