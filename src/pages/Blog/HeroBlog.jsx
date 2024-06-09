import Hero from '../../components/Sections/Hero'
import HeroImage from '../../assets/Images/blog.webp'
import PropTypes from 'prop-types'

const HeroBlog = () => {
  return (
    <Hero HeroImage={HeroImage} height={'min-h-[33vh]'}>
      <h1 className='text-5xl font-semibold'>Blog</h1>
    </Hero>
  )
}
HeroBlog.propTypes = {
  categoria: PropTypes.string
}

export default HeroBlog