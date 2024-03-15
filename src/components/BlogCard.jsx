import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import 'animate.css';

const BlogCard = ({ imageCard, TitleCard, TextCard, href }) => {
  return (
    <Link to={href}>
      <div className="mx-auto border-1 border-gray-400 rounded-md shadow-xl animate__animated animate__flipInY">
        <img src={imageCard} alt="image" className="rounded-t-md" />
        <div className="px-6 py-4 bg-slate-200 flex flex-col gap-3 rounded-b-md">
          <h3 className='text- tlgext-pretty font-semibold text-blue-800'>{TitleCard}</h3>
          <p className='text-xs text-gray-800'>{TextCard}</p>
          <br />
        </div>
      </div>
    </Link>
  )
}
BlogCard.propTypes = {
  imageCard: PropTypes.string,
  TitleCard: PropTypes.string,
  TextCard: PropTypes.string,
  href: PropTypes.string
};

export default BlogCard