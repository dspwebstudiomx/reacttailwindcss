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
import image from "../../../assets/Images/Blog/Articulos/blog2.webp"
import backgroundSectionImage from '../../../assets/Images/blogContacto.webp'
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa"
import { HelmetProvider } from "react-helmet-async"
import SEOFriendly from "../../../Functions/SEOFriendly"


const WebDesignCategoryPage = () => {


  const filterDataCategory = articulosBlog.filter(articulo => articulo.categoria == "Diseño Web")

  useTitle({ title: 'Blog' })

  return (
    <HelmetProvider>
      <SEOFriendly
        linkHref={'blog/diseno-web'}
        title={'Blog | Diseño Web | dspwebstudio'}
        description={'Categoría Diseño Web - Blog'}
        author={'dspwebstudio'}
        keywords={'diseño, blog, diseño web'}
        type={'website'}
        image={image}
      />
      <div id="scrollTop">
        <header>
          <Navbar />
        </header>
        <ScrollToTop />
        <main id='blog' className='mt-20 dark:bg-slate-800 bg-slate-300'>
          <Hero image={image} height={'h-[23vh] md:h-[20vh] xl:h-[33vh]'}>
            <h1 className='text-4xl font-semibold'>Diseño Web</h1>
          </Hero>
          <Section>
            <Container className={'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-between gap-6 gap-y-8 sm:gap-y-12 py-6 px-0'}>
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
          <BackgroundSection opacity={'opacity-65'} background={backgroundSectionImage} className={'xl:min-h-[50vh]'}>
            <div className='p-12 flex flex-col gap-6 items-center'>
              <h2 className='text-4xl'>¿Gustas que toque algún tema de tu interés?</h2>
              <p className='text-lg'>No dudes en contactarme para poder así generar el artículo solicitado.</p>
              <Spacing distance='mb-3' />
              <ButtonScroll name={'Contáctame'} to={'/contacto'} />
            </div>
          </BackgroundSection>
        </main>
        <Footer />
        <ReturnButton />
      </div>
    </HelmetProvider>
  )
}

export default WebDesignCategoryPage