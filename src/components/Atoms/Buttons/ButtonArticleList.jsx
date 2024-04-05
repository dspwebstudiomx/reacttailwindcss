const ButtonArticleList = ({ categorias, filtrarCategoria }) => {
  return (
    categorias.map(categoria => (
      <button
        key={categoria}
        type="button"
        onClick={() => filtrarCategoria(categoria)}
        className="font-semibold text-lg my-3 text-blue-950 hover:text-blue-500"
      >
        {categoria}
      </button>
    ))
  )
}
export default ButtonArticleList