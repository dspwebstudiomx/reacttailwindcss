import PageTemplate from "../components/Templates/PageTemplate"
import { articulosBlog } from "../data"
import { Link } from "react-router-dom"

const Blog = () => {
  return (
    <PageTemplate id="blog" TituloPrincipal={'Mis Artículos'} background={'bg-slate-300'} >
      <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center align-middle'}>
        {articulosBlog.map((articulo) => {
          return (
            <Link to={`/blog/${articulo.id}`} key={articulo.id}>
              <div className="mx-auto border-1 border-gray-400 rounded-md shadow-xl animate__animated animate__flipInY flex min-h-[260px] lg:min-h-[400px] w-[75vw] sm:flex-col sm:w-[100%] sm:h-auto">
                <img src={articulo.imagen} alt="image" className="rounded-t-md w-1/3 sm:w-full object-cover" />
                <div className="px-6 py-4 bg-slate-200 flex flex-col gap-3 rounded-b-md w-2/3 sm:w-full lg:min-h-[250px] ">
                  <h3 className='text- tlgext-pretty font-semibold text-blue-800'>{articulo.titulo}</h3>
                  <p className='text-xs text-gray-800'>{articulo.extracto}</p>
                  <br />
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </PageTemplate>
  )
}

export default Blog