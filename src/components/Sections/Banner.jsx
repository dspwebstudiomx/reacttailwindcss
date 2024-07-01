import Container from '../Templates/Container'
import PropTypes from 'prop-types'

const Banner = ({ id, children, className }) => {
  return (
    <section id={id} className='bg-gradient-to-r from-blue-500 to-blue-900 px-12'>
      <Container >
        <div className={`${className} text-white text-2xl`}>{children}</div>
      </Container>
    </section>
  )
}
Banner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string
}

export default Banner