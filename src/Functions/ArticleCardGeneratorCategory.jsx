import BlogCard from '../components/Molecules/BlogCard'

const ArticleCardGeneratorCategory = ({ currentPosts }) => {
  return (
    currentPosts.map(
      (articulo) => {
        return (
          <BlogCard
            key={articulo.id}
            id={articulo.id}
            titulo={articulo.titulo}
            fecha={articulo.fecha}
            autor={articulo.autor}
            categoria={articulo.categoria}
            imagen={articulo.imagen}
            tiempo={articulo.tiempo}
          />
        )
      }
    )
  )
}

export default ArticleCardGeneratorCategory