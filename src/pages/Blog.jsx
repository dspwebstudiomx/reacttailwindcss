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
    const filterDataCategory = articulosBlog.filter(articulo => articulo.categoria == categoria)
    setArticulos(filterDataCategory)
  }

  return (
    <PageTemplate id="blog" TituloPrincipal={'Articulos'} background={'bg-slate-200'} >
      <div className=' mb-16 mx-auto xl:mr-auto flex items-center bg-slate-300 justify-evenly px-5 w-[80%] xl:w-[70%] rounded-xl py-3  flex-col md:flex-row'>
        <h2>Seleccionar categoría:</h2>
        <ButtonArticleList categorias={categorias} filtrarCategoria={filtrarCategoria} />
      </div>
      <div className='grid sm:grid-cols-3 xl:grid-cols-4 gap-8'>
        <ArticleCardGenerator articulos={articulos} />
      </div>
    </PageTemplate>
  )
}

export default Blog