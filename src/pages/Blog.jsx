import ArticleCardGenerator from "../ArticleCardGenerator"
import PageTemplate from "../components/Templates/PageTemplate"

const Blog = () => {
  return (
    <PageTemplate id="blog" TituloPrincipal={'Mis Artículos'} background={'bg-slate-300'} >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center align-middle">
        {<ArticleCardGenerator />}
      </div>
    </PageTemplate>
  )
}

export default Blog