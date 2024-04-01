import { articulosBlog } from '../data'
import PageTemplate from "../components/Templates/PageTemplate"
import { useState } from 'react';
import ButtonArticleList from '../components/ButtonArticleList';
import ArticleCardGenerator from '../ArticleCardGenerator';

const Blog = () => {

  const allCategories = ["Todas", ...new Set(articulosBlog.map(articulo => articulo.categoria))]
  const [categorias] = useState(allCategories)
  const [articulos, setArticulos] = useState(articulosBlog)

  const filtrarCategoria = (categoria) => {
    if (categoria === "Todas") {
      setArticulos(articulosBlog);
      return;
    }
    const filterDataCategory = articulosBlog.filter(articulo => articulo.categoria === categoria)
    setArticulos(filterDataCategory)
  }
  return (
    <PageTemplate id="blog" TituloPrincipal={'Mis Artículos'} background={'bg-slate-300'} >
      <div className='flex flex-col md:flex-row gap-4 items-center justify-center w-full h-auto mb-16'>
        <ButtonArticleList categorias={categorias} filtrarCategoria={filtrarCategoria} />
      </div>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8'>
        <ArticleCardGenerator articulos={articulos} />
      </div>
    </PageTemplate>
  )
}

export default Blog