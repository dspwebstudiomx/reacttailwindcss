import PageTemplate from "../components/Templates/PageTemplate"
import Section from "../components/Templates/Section"
import Container from "../components/Templates/Container"
import Placeholder from "../assets/Images/Placeholder.webp"
import BlogCard from "../components/BlogCard"

const Blog = () => {
  return (
    <PageTemplate>
      <Section className="mx-auto">
        <h1 className="text-3xl mx-auto text-center mb-2">Mis Artículos</h1>
        <hr className='h-1 bg-gradient-to-r from-cyan-500 to-blue-500 w-[12%] skew-x-12 mb-8 mx-auto text-center' />
        <Container className={'grid md:grid-cols-4 mt-20 gap-8 justify-center align-middle'}>
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
      </Section>
    </PageTemplate>
  )
}

export default Blog