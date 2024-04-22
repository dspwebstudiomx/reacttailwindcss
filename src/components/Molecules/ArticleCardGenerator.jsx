import { Link } from "react-router-dom"
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbClockEdit } from "react-icons/tb";
import { articulosBlog } from "../../data";

const articleCardGenerator = () => {
  return (
    articulosBlog.reverse().map(
      (articulo) => {
        return (
          <Link to={`/blog/${articulo.id}`} key={articulo.id}>
            <article className="relate mx-auto border-1 border-gray-400 shadow-xl animate__animated animate__flipInY flex w-[75vw] sm:flex-col sm:w-[100%] rounded-xl">
              <img src={articulo.imagen} alt="image" className="w-1/3 sm:w-full object-cover md:h-[150px] rounded-tl-xl rounded-bl-xl sm:rounded-bl-none sm:rounded-tr-xl" />
              <div className="px-6 py-10 bg-slate-200 flex flex-col gap-3  w-2/3 sm:w-full min-h-[240px] overflow-hidden rounded-br-xl sm:rounded-bl-xl ">
                <h2 className='text-xl md:text-[1em] font-normal  text-blue-800 leading-tight'>{articulo.titulo}</h2>
                <div className="mt-3 flex flex-col gap-2">
                  <div className="flex items-center text-sm text-slate-800">
                    <TbClockEdit size={16} color="#1D4ED8" /><span className="mx-1 font-medium">Fecha:</span>{articulo.fecha}
                  </div>
                  <div className="flex items-center text-sm text-slate-800" >
                    <IoPersonCircleOutline size={16} color="#1D4ED8" /><span className="mx-1 font-medium">Autor:</span>{articulo.autor}
                  </div>
                </div>
              </div>
              {/* Bubble */}
              <div id={`Bubble-${articulo.id}`} className="absolute -top-2 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white text-sm shadow-lg rounded-bl-lg rounded-tr-xl border-2 border-blue-500 min-w-[120px] text-center">{articulo.categoria}</div>
              {/* Bubble */}

            </article>
          </Link>
        )
      }
    )
  )
}
export default articleCardGenerator