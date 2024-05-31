const ButtonArticleList = ({ categorias, filtrarCategoria }) => {
  return (
    categorias.sort().map(categoria => (
      <a
        key={categoria}
        value={categoria}
        className="font-normal text-ellipsis text-white hover:text-blue-200"
        onClick={() => filtrarCategoria(categoria)}>
        {categoria}
      </a>
    ))
  )
}
export default ButtonArticleList