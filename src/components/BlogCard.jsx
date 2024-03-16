import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import 'animate.css';


const BlogCard = ({ imagen, titulo, extracto, href, id }) => {
  return (
    <Link to={href} key={id}>
      <div className="mx-auto border-1 border-gray-400 rounded-md shadow-xl animate__animated animate__flipInY flex h-[200px] w-[75vw] sm:flex-col sm:w-[100%] sm:h-auto">
        <img src={imagen} alt="image" className="rounded-t-md w-1/2 sm:w-full object-cover" />
        <div className="px-6 py-4 bg-slate-200 flex flex-col gap-3 rounded-b-md ">
          <h3 className='text- tlgext-pretty font-semibold text-blue-800'>{titulo}</h3>
          <p className='text-xs text-gray-800'>{extracto}</p>
          <br />
        </div>
      </div>
    </Link>
  )
}
BlogCard.propTypes = {
  id: PropTypes.number,
  imagen: PropTypes.string,
  titulo: PropTypes.string,
  extracto: PropTypes.string,
  href: PropTypes.string
};

export default BlogCard