import { articulosBlog } from '../data'
import PageTemplate from "../components/Templates/PageTemplate"
import { useState } from 'react';
import ButtonArticleList from '../components/Atoms/Buttons/ButtonArticleList';
import ArticleCardGenerator from '../components/Molecules/ArticleCardGenerator';

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
    <PageTemplate id="blog" TituloPrincipal={'Blog Danielito'} background={'bg-slate-400'} >
      <div className='flex flex-col md:flex-row justify-evenly min:w-[40%] mx-auto mb-20 bg-slate-100 rounded-lg text-slate-900 px-6 py-4 border-2 border-blue-600 active:text-blue-600'>
        <ButtonArticleList categorias={categorias} filtrarCategoria={filtrarCategoria} />
      </div>
      <div className='grid sm:grid-cols-3 xl:grid-cols-4 gap-8'>
        <ArticleCardGenerator articulos={articulos} />
      </div>
    </PageTemplate>
  )
}

export default Blog