import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import 'animate.css';

const BlogCard = ({ imageCard, TitleCard, TextCard, href }) => {
  return (
    <Link to={href}>
      <div className="w-[240px] mx-auto border-1 border-gray-400 rounded-lg shadow-xl animate__animated animate__flipInY">
        <img src={imageCard} alt="image" className="rounded-t-lg" />
        <div className="px-6 py-8 bg-slate-200 flex flex-col gap-3 rounded-b-lg">
          <h3 className='text-xl text-pretty font-semibold'>{TitleCard}</h3>
          <p className='text-sm'>{TextCard}</p>
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