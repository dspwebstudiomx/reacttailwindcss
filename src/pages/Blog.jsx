import PageTemplate from "../components/Templates/PageTemplate"
import Container from "../components/Templates/Container"
import Placeholder from "../assets/Images/Placeholder.webp"
import BlogCard from "../components/BlogCard"

const Blog = () => {
  return (
    <PageTemplate id="blog" TituloPrincipal={'Mis Artículos'} background={"bg-slate-300"}>
      <Container className={'grid grid-cols-2 md:grid-cols-4 mt-20 gap-8 justify-center align-middle'}>
        <BlogCard
          imageCard={Placeholder}
          href={'https://google.com'}
          TitleCard={'Google'}
          TextCard={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo autem voluptatem veniam perferendis, tempora omnis?'}
        />
        <BlogCard
          imageCard={Placeholder}
          href={'https://google.com'}
          TitleCard={'Google'}
          TextCard={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo autem voluptatem veniam perferendis, tempora omnis?'}
        />
        <BlogCard
          imageCard={Placeholder}
          href={'https://google.com'}
          TitleCard={'Google'}
          TextCard={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo autem voluptatem veniam perferendis, tempora omnis?'}
        />
        <BlogCard
          imageCard={Placeholder}
          href={'https://google.com'}
          TitleCard={'Google'}
          TextCard={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo autem voluptatem veniam perferendis, tempora omnis?'}
        />
        <BlogCard
          imageCard={Placeholder}
          href={'https://google.com'}
          TitleCard={'Google'}
          TextCard={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo autem voluptatem veniam perferendis, tempora omnis?'}
        />
        <BlogCard
          imageCard={Placeholder}
          href={'https://google.com'}
          TitleCard={'Google'}
          TextCard={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo autem voluptatem veniam perferendis, tempora omnis?'}
        />

      </Container>
      <p></p>

    </PageTemplate>
  )
}

export default Blog