import BlogCard from './BlogCard';
// import { articulosBlog } from '../../data';

const articleCardGenerator = ({ articulos }) => {
  return (
    articulos.map(
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
            idCategoria={articulo.idCategoria}
            idTitle={articulo.idTitle}
          />
        )
      }
    ).reverse()
  )
}
export default articleCardGenerator