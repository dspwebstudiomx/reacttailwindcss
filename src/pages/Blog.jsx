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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-center align-middle md:px-20 ">
        <ArticleCardGenerator articulos={articulos} />
      </div>
      <div className="flex flex-wrap gap-4 mt-20 items-center justify-center">
        <ButtonArticleList categorias={categorias} filtrarCategoria={filtrarCategoria} />
      </div>
    </PageTemplate>
  )
}

export default Blog