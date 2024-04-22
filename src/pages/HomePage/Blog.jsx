import BackgroundSection from '../../components/Molecules/BackgroundSection'
import BlogSectionImage from '../../assets/Images/blog.webp'
import Spacing from '../../components/Sections/Spacing'
import ArticleCardGenerator from '../../components/Molecules/ArticleCardGenerator'
const Blog = () => {
  return (
    <BackgroundSection background={BlogSectionImage} opacity='opacity-75' >
      <div className='text-slate-100'>
        <h2 className='text-4xl'>Visita mi Blog</h2>
        <Spacing distance='mb-8' />
        <p className='text-2xl'>Aquí encontrarás temas sobre Diseño Web, Desarrollo Web, Posicionamiento, tips y más.</p>
      </div>
      <Spacing distance='mb-20' />
      <div className='grid grid-cols-4 gap-8'>
        <ArticleCardGenerator />
      </div>
    </BackgroundSection>
  )
}
export default Blog