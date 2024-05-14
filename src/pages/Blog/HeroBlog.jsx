import Hero from '../../components/Sections/Hero'
import HeroImage from '../../assets/Images/blog.webp'

const HeroBlog = () => {
  return (
    <Hero HeroImage={HeroImage}>
      <h1 className='text-4xl'>Blog</h1>
    </Hero>
  )
}

export default HeroBlog