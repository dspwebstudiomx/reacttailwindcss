import BackgroundSection from '../../components/Molecules/BackgroundSection'
import BlogSectionImage from '../../assets/Images/blog.webp'
import Spacing from '../../components/Sections/Spacing'
import { articulosBlog } from '../../data'
import { useState } from 'react'
import ButtonScroll from '../../components/Atoms/Buttons/ButtonScroll'
import ButtonContainer from '../../components/Templates/ButtonContainer'
import { IoEyeOutline } from 'react-icons/io5'
import BlogCard from '../../components/Molecules/BlogCard'

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
    <BackgroundSection background={BlogSectionImage} opacity='opacity-65' id={'blog'} >
      <div className='flex flex-col md:flex-row gap-20 py-20 '>
        <div className='text-slate-100 sm:w-2/3'>
          <h2 className='text-4xl text-center sm:text-left font-semibold'>Visita mi Blog</h2>
          <Spacing distance='mb-8' />
          <p className='text-2xl px-12 sm:px-0'>Aquí encontrarás temas sobre Diseño Web, Desarrollo Web, Posicionamiento, tips y más.</p>
          <div className='hidden sm:block'>
            <ButtonContainer distancia={'mt-12'}>
              <ButtonScroll name={'Ver mas'} to={'/blog'} iconLeft={<IoEyeOutline />} />
            </ButtonContainer>
          </div>
        </div>
        <ul className='grid grid-cols-2 gap-4 mt-0 sm:mt-0  md:w-[100%] px-6 sm:px-0'>
          {articulos.map(
            (articulo) => {
              return (
                <BlogCard
                  key={articulo.id}
                  id={articulo.id}
                  imagen={articulo.imagen}
                  image240={articulo.image240}
                  image480={articulo.image480}
                  image576={articulo.image576}
                  titulo={articulo.titulo}
                  fecha={articulo.fecha}
                  autor={articulo.autor}
                  tiempo={articulo.tiempo}
                  categoria={articulo.categoria}
                  idCategoria={articulo.idCategoria}
                  idTitle={articulo.idTitle}
                />
              )
            }
          ).slice(-2).reverse()}
        </ul>
        <div className='block sm:hidden'>
          <ButtonContainer distancia={'mt-0'}>
            <ButtonScroll name={'Ver mas'} to={'/blog'} iconLeft={<IoEyeOutline />} />
          </ButtonContainer>
        </div>
      </div>
    </BackgroundSection >
  )
}
export default Blog