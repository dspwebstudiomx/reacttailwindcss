import Container from '../Templates/Container'
import PropTypes from 'prop-types'

const Banner = ({ children, className }) => {
  return (
    <section className='bg-gradient-to-r from-blue-500 to-blue-900'>
      <Container >
        <div className={`${className} text-white`}>{children}</div>
      </Container>
    </section>
  )
}
Banner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

export default Banner