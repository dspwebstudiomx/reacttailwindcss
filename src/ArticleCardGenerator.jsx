import { articulosBlog } from "./data"
import { Link } from "react-router-dom"
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbClockEdit } from "react-icons/tb";

const ArticleCardGenerator = () => {
  return (
    articulosBlog.map(
      (articulo) => {
        return (
          <Link to={`/blog/${articulo.id}`} key={articulo.id}>
            <article className="relate mx-auto border-1 border-gray-400 rounded-md shadow-xl animate__animated animate__flipInY flex w-[75vw] sm:flex-col sm:w-[100%]">
              <img src={articulo.imagen} alt="image" className="rounded-t-md w-1/3 sm:w-full object-cover md:h-[150px] " />
              <div className="px-6 py-6 bg-slate-200 flex flex-col gap-3 rounded-b-md w-2/3 sm:w-full sm:min-h-[180px] justify-start overflow-hidden">
                <h3 className='text-lg font-semibold text-blue-800 leading-6'>{articulo.titulo}</h3>
                <div className="mt-3 flex gap-2">
                  <div className="flex items-center text-xs">
                    <TbClockEdit size={16} color="#1D4ED8" /><span className="mx-1 font-medium">Fecha:</span>{articulo.fecha}
                  </div>
                  <div className="flex items-center text-xs">
                    <IoPersonCircleOutline size={16} color="#1D4ED8" /><span className="mx-1 font-medium">Autor:</span>{articulo.autor}
                  </div>
                </div>
              </div>


              {/* Bubble */}
              <div id={`Bubble-${articulo.id}`} className="absolute top-0 right-0 bg-blue-700 px-4 py-2 text-white text-sm shadow-lg rounded-bl-lg rounded-tr-lg border-2 border-blue-500">{articulo.categoria}</div>
              {/* Bubble */}

            </article>
          </Link>
        )
      }
    ))
}
export default ArticleCardGenerator