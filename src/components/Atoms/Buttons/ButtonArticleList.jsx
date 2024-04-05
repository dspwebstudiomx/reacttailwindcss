const ButtonArticleList = ({ categorias, filtrarCategoria }) => {
  return (
    categorias.map(categoria => (
      <button
        key={categoria}
        type="button"
        onClick={() => filtrarCategoria(categoria)}
        className="font-semibold text-xl hover:text-blue-800 my-3"
      >
        {categoria}
      </button >
    ))
  )
}
export default ButtonArticleList