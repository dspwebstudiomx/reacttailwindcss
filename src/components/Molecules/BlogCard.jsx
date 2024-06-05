
import { IoCalendarClearOutline, IoPersonCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { FaRegClock } from "react-icons/fa";

import PropTypes from 'prop-types'

const BlogCard = ({ id, imagen, titulo, fecha, autor, categoria, tiempo }) => {
  return (
    <Link to={`/blog/${id}`} key={id}>
      <article className='flex mx-auto border-1 border-gray-400 rounded-md shadow-xl animate__animated animate__flipInY sm:flex-col w-full sm:w-[240px] xl:w-[220px] text-slate-900 dark:text-slate-900'>
        {/* Sección 1 */}
        <img src={imagen} alt='image' className='rounded-tl-md rounded-bl-md sm:rounded-t-md sm:rounded-b-none w-[40%] sm:w-full object-cover h-auto sm:h-[120px] xl:h-[120px]' />
        {/* Bubble */}
        <div id={`Bubble-${id}`} className='absolute -top-2 -right-1 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white text-base xl:text-sm shadow-lg rounded-bl-lg rounded-tr-lg border-2 border-blue-500 min-w-[120px] text-center'>{categoria}</div>
        {/* Bubble */}
        {/* Sección 1 */}

        {/* Sección 2 */}
        <div className='px-6 py-12 sm:py-6 bg-slate-100 flex flex-col gap-1 rounded-br-md rounded-tr-md sm:rounded-t-none sm:rounded-b-md w-full min-h-[220px] sm:min-h-[210px] justify-center overflow-hidden'>
          <h3 className='text-lg font-semibold sm:text-lg xl:text-sm text-blue-800 leading-snug'>{titulo}</h3>
          <div className='mt-3 flex flex-col gap-2'>
            <div className='flex items-left text-xs'>
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
}

export default BlogCard