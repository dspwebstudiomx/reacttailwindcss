import { Link } from 'react-router-dom'
import { IoCalendarOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { TbClockEdit } from 'react-icons/tb';
// import { articulosBlog } from '../../data';

const articleCardGenerator = ({ articulos }) => {
  return (
    articulos.map(
      (articulo) => {
        return (
          <Link to={`/blog/${articulo.id}`} key={articulo.id}>
            <article className='flex mx-auto border-1 border-gray-400 rounded-md shadow-xl animate__animated animate__flipInY flex-col w-[75%] sm:flex-col sm:w-[240px] xl:w-[220px] text-slate-900 dark:text-slate-900'>
              <img src={articulo.imagen} alt='image' className='rounded-t-md w-full object-cover h-[160px] sm:h-[120px] xl:h-[100px] ' />
              <div className='px-6 py-6 bg-slate-100 flex flex-col gap-1 rounded-b-md w-full min-h-[220px] sm:min-h-[190px] justify-center overflow-hidden'>
                <h3 className='text-xl font-semibold sm:text-lg xl:text-sm text-blue-800 leading-snug'>{articulo.titulo}</h3>
                <div className='mt-3 flex flex-col gap-2'>
                  <div className='flex items-left text-xs'>
                    <TbClockEdit size={16} color='#1D4ED8' /><span className='mx-1 font-medium'>Fecha:</span>{articulo.fecha}
                  </div>
                  <div className='flex items-center text-xs'>
                    <IoPersonCircleOutline size={16} color='#1D4ED8' /><span className='mx-1 font-medium'>Autor:</span>{articulo.autor}
                  </div>
                </div>
              </div>
              {/* Bubble */}
              <div id={`Bubble-${articulo.id}`} className='absolute -top-2 -right-1 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white text-xs shadow-lg rounded-bl-lg rounded-tr-lg border-2 border-blue-500 min-w-[120px] text-center'>{articulo.categoria}</div>
              {/* Bubble */}

            </article>

          </Link>
        )
      }
    ).reverse()
  )
}
export default articleCardGenerator