import Hero from '../../components/Sections/Hero'
import PropTypes from 'prop-types'

const HeroBlog = ({ image }) => {
  return (
    <Hero image={image} height={'min-h-[33vh]'}>
      <h1 className='text-5xl font-semibold'>Blog</h1>
    </Hero>
  )
}
HeroBlog.propTypes = {
  categoria: PropTypes.string,
  image: PropTypes.string
}

export default HeroBlog