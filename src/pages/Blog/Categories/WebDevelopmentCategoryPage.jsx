import { articulosBlog } from "../../../data"
import useTitle from "../../../Functions/Hooks/useTitle"
import Navbar from "../../../components/Sections/Navbar"
import ScrollToTop from "../../../Functions/ScrolltoTop"
import Section from "../../../components/Templates/Section"
import Container from "../../../components/Templates/Container"
import BackgroundSection from "../../../components/Molecules/BackgroundSection"
import Spacing from "../../../components/Sections/Spacing"
import ButtonScroll from "../../../components/Atoms/Buttons/ButtonScroll"
import Footer from "../../../components/Sections/Footer"
import ReturnButton from "../../../components/Atoms/Buttons/ReturnButton"
import ArticleCardGenerator from "../../../components/Molecules/ArticleCardGenerator"
import Hero from "../../../components/Sections/Hero"
import HeroImage from "../../../assets/Images/Blog/Categorias/code-image.webp"
import backgroundSectionImage from '../../../assets/Images/blogContacto.webp'
import ButtonContainer from "../../../components/Templates/ButtonContainer"
import { FaArrowRotateLeft } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"


const WebDevelopmentCategoryPage = () => {


  const filterDataCategory = articulosBlog.filter(articulo => articulo.categoria == "Desarrollo Web")

  useTitle({ title: 'Blog' })

  return (
    <div id="scrollTop">
      <header>
        <Navbar />
      </header>
      <ScrollToTop />
      <main id='blog' className='mt-20 dark:bg-slate-800 bg-slate-300'>
        <Hero HeroImage={HeroImage} height={'min-h-[33vh]'}>
          <h1 className='text-5xl font-semibold'>Desarrollo Web</h1>
        </Hero>
        <Section>
          <Container className={'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-12 py-6 px-0'}>
            <ArticleCardGenerator articulos={filterDataCategory} />
          </Container>
          <div className='mt-12 mx-auto'>
            <Link to={'/blog'}>
              <button type='button' className={'rounded-lg text-white border-2  text-lg bg-gradient-to-r from-blue-500 to-blue-900 flex items-center justify-center w-[70%] md:w-[250px] lg:w-[270px] h-[80px] sm:h-[60px] lg: mx-auto border-white shadow-2xl'}>
                <span className={`mr-2`}><FaHome /></span>
                Ver todos los articulos
              </button>
            </Link >
          </div>
        </Section>
        <BackgroundSection opacity={'opacity-65'} background={backgroundSectionImage}>
          <div className='p-12 flex flex-col gap-6'>
            <h2 className='text-3xl'>¿Gustas que toque algún tema de tu interés?</h2>
            <p className='text-lg'>No dudes en contactarme para poder así generar el artículo solicitado.</p>
            <Spacing distance='mb-3' />
            <ButtonScroll name={'Contáctame'} to={'/contacto'} />
          </div>
        </BackgroundSection>
      </main>
      <Footer />
      <ReturnButton />
    </div>
  )
}

export default WebDevelopmentCategoryPage