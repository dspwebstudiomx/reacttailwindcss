const ButtonArticleList = ({ categorias, filtrarCategoria }) => {
  return (
    categorias.map(categoria => (
      <option
        key={categoria}
        value={categoria}
        className="font-semibold text-lg my-3 text-blue-950 hover:text-blue-500"
        onClick={() => filtrarCategoria(categoria)}>
        {categoria}
      </option>
    ))
  )
}
export default ButtonArticleList