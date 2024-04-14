import PropTypes from 'prop-types'
import { FaQuoteLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Testimonial = ({ id, nombre, empresa, imagen, testimonio, hyperlink }) => {
  return (
    <article key={id} className='border-blue-900 border-2 rounded-xl p-6 flex flex-col gap-5 bg-slate-200 justify-center shadow-2xl animate_animated animate__bounceIn'>
      <p className='leading-5 flex'>
        <span>
          <FaQuoteLeft size={16} className='text-blue-800 mr-2' />
        </span>
        {testimonio}
      </p>
      <Link to={hyperlink} target='blank' rel="noreferrer">
        <div className='flex gap-4 items-center ml-5'>
          <img src={imagen} alt={nombre + ', ' + empresa} className='object-contain rounded-full w-12 h-12 border-2 border-slate-300' />
          <div className='block'>
            <h2 className='font-semibold'>
              {nombre}
            </h2>
            <p className='text-xs text-blue-900 font-medium'>@{empresa}</p>
          </div>
        </div>
      </Link>
    </article>
  )
}
Testimonial.propTypes = {
  id: PropTypes.number.isRequired,
  hyperlink: PropTypes.string,
  nombre: PropTypes.string.isRequired,
  empresa: PropTypes.string.isRequired,
  imagen: PropTypes.string,
  testimonio: PropTypes.string.isRequired
}
export default Testimonial