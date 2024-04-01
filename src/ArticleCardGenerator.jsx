import { Link } from "react-router-dom"
import { IoPersonCircleOutline } from "react-icons/io5";
import { TbClockEdit } from "react-icons/tb";

const articleCardGenerator = ({ articulos }) => {
  return (
    articulos.map(
      (articulo) => {
        return (
          <Link to={`/blog/${articulo.id}`} key={articulo.id}>
            <article className="relate mx-auto border-1 border-gray-400 shadow-xl animate__animated animate__flipInY flex w-[75vw] sm:flex-col sm:w-[100%]">
              <img src={articulo.imagen} alt="image" className="w-1/3 sm:w-full object-cover md:h-[150px] " />
              <div className="px-6 py-10 bg-slate-200 flex flex-col gap-3  w-2/3 sm:w-full min-h-[230px] justify-start overflow-hidden">
                <h2 className='text-sm lg:text-[16px] font-normal  text-blue-800 leading-tight'>{articulo.titulo}</h2>
                <div className="mt-3 flex flex-col gap-2">
                  <div className="flex items-center text-xs text-slate-800">
                    <TbClockEdit size={16} color="#1D4ED8" /><span className="mx-1 font-medium">Fecha:</span>{articulo.fecha}
                  </div>
                  <div className="flex items-center text-xs text-slate-800" >
                    <IoPersonCircleOutline size={16} color="#1D4ED8" /><span className="mx-1 font-medium">Autor:</span>{articulo.autor}
                  </div>
                </div>
              </div>
              {/* Bubble */}
              <div id={`Bubble-${articulo.id}`} className="absolute -top-2 right-0 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white text-sm shadow-lg rounded-bl-lg rounded-tr-lg border-2 border-blue-500">{articulo.categoria}</div>
              {/* Bubble */}

            </article>
          </Link>
        )
      }
    )
  )
}
export default articleCardGenerator