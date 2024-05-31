import Hero from '../../components/Sections/Hero'
import HeroImage from '../../assets/Images/blog.webp'

const HeroBlog = () => {
  return (
    <Hero HeroImage={HeroImage} height={'min-h-[33vh]'}>
      <h1 className='text-5xl font-semibold'>Blog</h1>
    </Hero>
  )
}

export default HeroBlog