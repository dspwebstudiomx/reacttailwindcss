import PropTypes from "prop-types";

const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = []

  const calculoPaginas = Math.ceil(totalPosts / postsPerPage)
  console.log("cantidad de pestañas=" + calculoPaginas)
  console.log("totalPosts=" + totalPosts);
  console.log("postsPerPage=" + postsPerPage);

  for (let i = 1; i <= calculoPaginas; i++) {
    pages.push(i)
  }
  return (
    <nav>
      <ul className="pagination flex items-center gap-8 justify-center">
        {pages.map((page, index) => {
          return (
            <li key={index} className="cursor-pointer" >
              <a onClick={() => setCurrentPage(page)}>{page}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
}
Pagination.propTypes = {
  totalPosts: PropTypes.any,
  postsPerPage: PropTypes.any,
  setCurrentPage: PropTypes.func,
}
export default Pagination
