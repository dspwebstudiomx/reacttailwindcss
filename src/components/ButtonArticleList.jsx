const ButtonArticleList = ({ categorias, filtrarCategoria }) => {
  return (
    categorias.map(categoria => (
      <button
        key={categoria}
        type="button"
        onClick={() => filtrarCategoria(categoria)}
        className="text-bold hover:text-blue-800"
      >
        {categoria}
      </button >
    ))
  )
}
export default ButtonArticleList