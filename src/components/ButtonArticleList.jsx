const ButtonArticleList = ({ categorias, filtrarCategoria }) => {
  return (
    categorias.map(categoria => (
      <button
        key={categoria}
        type="button"
        onClick={() => filtrarCategoria(categoria)}
        className="rounded-full text-white border-2  text-2xl sm:text-lg bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center w-[320px] sm:w-[180px] h-[40px]">
        {categoria}
      </button>
    ))
  )
}
export default ButtonArticleList