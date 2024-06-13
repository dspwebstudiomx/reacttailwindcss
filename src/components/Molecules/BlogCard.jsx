
import { IoCalendarClearOutline, IoPersonCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa";

import PropTypes from 'prop-types'

const BlogCard = ({ id, imagen, titulo, fecha, autor, categoria, tiempo, idTitle, idCategoria }) => {
  return (
    <Link to={`/blog/${idCategoria}/${idTitle}`} key={id}>
      <article className='flex mx-auto border-1 border-gray-400 bg-slate-100 rounded-md shadow-xl animate__animated animate__flipInY flex-col w-full sm:w-[240px] xl:w-[220px] text-slate-900 dark:text-slate-900 min-h-[200px] sm:min-h-[330px] '>
        {/* Sección 1 */}
        <img src={imagen} alt='image' className='rounded-tl-md rounded-b-0 sm:rounded-t-md sm:rounded-b-none w-full object-cover h-[120px] xl:h-[120px]' />
        {/* Bubble */}
        <Link to={`/blog/${idCategoria}`}>
          <div id={`Bubble-${id}`} className='absolute -top-2 -right-1 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white text-base xl:text-sm shadow-lg rounded-bl-lg rounded-tr-lg border-2 border-blue-500 min-w-[120px] text-center'>{categoria}
          </div>
        </Link>
        {/* Bubble */}
        {/* Sección 1 */}

        {/* Sección 2 */}
        <div className='p-6 sm:py-6 bg-slate-100 flex flex-col gap-1 rounded-b-lg rounded-tr-md sm:rounded-t-none sm:rounded-b-md w-full justify-center overflow-hidden min-h-[160px] xl:min-h-[210px]'>
          <h3 className='text-base font-semibold sm:text-lg xl:text-sm text-blue-800 leading-snug'>{titulo}</h3>
          <div className='mt-3 flex-col gap-2 hidden sm:flex'>
            <div className='items-left text-xs flex'>
              <IoCalendarClearOutline size={16} color='#1D4ED8' /><span className='mx-1 font-medium'>Fecha:</span>{fecha}
            </div>
            <div className='flex items-center text-xs'>
              <IoPersonCircleOutline size={16} color='#1D4ED8' /><span className='mx-1 font-medium'>Autor:</span>{autor}
            </div>
            <div className='flex items-center text-xs'>
              <FaRegClock size={16} color='#1D4ED8' /><span className='mx-1 font-medium'>Tiempo:</span>{tiempo}
            </div>
          </div>
        </div>
        {/* Sección 2 */}

      </article>

    </Link>
  )
}
BlogCard.propTypes = {
  id: PropTypes.number.isRequired,
  imagen: PropTypes.string.isRequired,
  titulo: PropTypes.string.isRequired,
  fecha: PropTypes.string.isRequired,
  tiempo: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  idCategoria: PropTypes.string.isRequired,
  idTitle: PropTypes.string.isRequired,
}

export default BlogCard