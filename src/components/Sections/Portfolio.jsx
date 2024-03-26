import Section from "../Templates/Section";
import { clientes } from "../../data";
import Container from "../Templates/Container";
import Card from "../Card"


const Portfolio = () => {
  const clientListCard = clientes.map(
    (cliente) => {
      return (
        <Card
          key={cliente.id}
          backgroundImage={cliente.backgroundImage}
          cliente={cliente.cliente}
          href={cliente.href} target="_blank" alt={cliente.alt}

        />
      )
    }
  );
  const classes = "grid lg:max-w-screen-lg sm:grid-cols-2  lg:grid-cols-3  items-center gap-10 mx-6"

  return (
    <Section id="portfolio" className="bg-red-500">
      <Container className={classes}>
        {clientListCard}
      </Container>
    </Section>
  )
};

export default Portfolio