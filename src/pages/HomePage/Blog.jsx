import BackgroundSection from '../../components/Molecules/BackgroundSection'
import BlogSectionImage from '../../assets/Images/blog.webp'
import Spacing from '../../components/Sections/Spacing'
import { articulosBlog } from '../../data'
import { useState } from 'react'
import { IoCalendarOutline, IoPersonCircleOutline } from 'react-icons/io5'
import { TbClockEdit } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import ButtonScroll from '../../components/Atoms/Buttons/ButtonScroll'
import ButtonContainer from '../../components/Templates/ButtonContainer'
import { IoEyeOutline } from 'react-icons/io5'

const Blog = () => {
  const [articulos, setArticulos] = useState(articulosBlog)

  const filtrarCategorias = (categoria) => {
    if (categoria === "Todas") {
      setArticulos(articulosBlog);
      return;
    }
    const filterDataCategory = articulosBlog.filter(articulo => articulo.categoria == categoria)
    setArticulos(filterDataCategory)
  }

  return (
    <BackgroundSection background={BlogSectionImage} opacity='opacity-75' id={'blog'}>
      <div className='grid sm:grid-cols-2 gap-12'>
        <div className='text-slate-100'>
          <h2 className='text-4xl text-center sm:text-left'>Visita mi Blog</h2>
          <Spacing distance='mb-8' />
          <p className='text-2xl'>Aquí encontrarás temas sobre Diseño Web, Desarrollo Web, Posicionamiento, tips y más.</p>
          <ButtonContainer distancia={'mt-12'}>
            <ButtonScroll name={'Ver mas'} to={'/blog'} iconLeft={<IoEyeOutline />} />
          </ButtonContainer>
        </div>
        <div className='grid sm:grid-cols-2 gap-12 mt-12 sm:mt-0'>
          {articulos.map(
            (articulo) => {
              return (
                <Link to={`/blog/${articulo.id}`} key={articulo.id}>
                  <article className='relate mx-auto border-1 border-gray-400 shadow-xl animate__animated animate__flipInY flex w-[75vw] sm:flex-col sm:w-[240px] rounded-xl xl:min-h-[375px]'>
                    <img src={articulo.imagen} alt='image' className='w-1/3 sm:w-full object-cover md:h-[150px] rounded-tl-xl rounded-bl-xl sm:rounded-bl-none sm:rounded-tr-xl' />
                    <div className='px-6 py-10 bg-white flex flex-col gap-3  w-2/3 sm:w-full min-h-[250px] overflow-hidden rounded-br-xl sm:rounded-bl-xl  '>
                      <h2 className='text-xl md:text-[1em] font-semibold  text-blue-800 leading-tight'>{articulo.titulo}</h2>
                      <div className='mt-3 flex flex-col gap-2'>
                        <div className='flex items-center text-xs text-slate-800'>
                          <IoCalendarOutline size={16} color='#1D4ED8' /><span className='mx-1 font-medium'>Fecha:</span>{articulo.fecha}
                        </div>
                        <div className='flex items-center text-xs text-slate-800' >
                          <IoPersonCircleOutline size={16} color='#1D4ED8' /><span className='mx-1 font-medium'>Autor:</span>{articulo.autor}
                        </div>
                        <div className='flex items-center text-xs text-slate-800' >
                          <TbClockEdit size={16} color='#1D4ED8' /><span className='mx-1 font-medium'>Tiempo:</span>{articulo.tiempo}
                        </div>
                      </div>
                    </div>
                    {/* Bubble */}
                    <div id={`Bubble-${articulo.id}`} className='absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 text-white text-sm shadow-lg rounded-bl-lg rounded-tr-xl border-2 border-blue-500 min-w-[120px] text-center'>{articulo.categoria}</div>
                    {/* Bubble */}

                  </article>
                </Link>
              )
            }
          ).slice(-2).reverse()}
        </div>
      </div>
    </BackgroundSection>
  )
}
export default Blog