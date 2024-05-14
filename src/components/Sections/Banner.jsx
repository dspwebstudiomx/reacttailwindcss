import Container from '../Templates/Container'
import PropTypes from 'prop-types'

const Banner = ({ children, className }) => {
  return (
    <section className='bg-gradient-to-r from-blue-500 to-blue-900 py-12'>
      <Container className={className}>
        <div className='text-xl text-white text-center'>{children}</div>
      </Container>
    </section>
  )
}
Banner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Banner