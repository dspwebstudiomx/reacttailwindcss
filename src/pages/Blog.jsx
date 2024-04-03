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
      <div className='flex justify-evenly min:w-[40%] mx-auto mb-20 bg-slate-100 rounded-md text-slate-900 px-6 py-4 border-2 border-slate-500'>
        <ButtonArticleList categorias={categorias} filtrarCategoria={filtrarCategoria} />
      </div>
      <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8'>
        <ArticleCardGenerator articulos={articulos} />
      </div>
    </PageTemplate>
  )
}

export default Blog