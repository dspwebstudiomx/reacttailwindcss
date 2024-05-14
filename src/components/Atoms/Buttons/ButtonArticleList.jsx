const ButtonArticleList = ({ categorias, filtrarCategoria }) => {
  return (
    categorias.map(categoria => (
      <a
        key={categoria}
        value={categoria}
        className="font-normal text-md text-white hover:text-blue-500"
        onClick={() => filtrarCategoria(categoria)}>
        {categoria}
      </a>
    ))
  )
}
export default ButtonArticleList