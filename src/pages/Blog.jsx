import PageTemplate from "../components/Templates/PageTemplate"
import Container from "../components/Templates/Container"
import BlogCard from "../components/BlogCard"
import { articulosBlog } from "../data"

const Blog = () => {
  return (
    <PageTemplate id="blog" TituloPrincipal={'Mis Artículos'} background={"bg-slate-300"}>
      <Container className={'grid grid-cols-1 md:grid-cols-4 mt-20 gap-8 justify-center align-middle'}>
        {articulosBlog.map((articulo) => {
          return (
            <BlogCard key={articulo.id} imagen={articulo.imagen} href={'https://google.com'} titulo={articulo.titulo} extracto={articulo.extracto} />
          )
        })}
      </Container>
    </PageTemplate>
  )
}

export default Blog