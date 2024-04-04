import Section from "../Templates/Section";
import { clientes } from "../../data";
import Container from "../Templates/Container";
import Card from "../Card"


const Portfolio = () => {
  const clientListCard = clientes.map(
    (cliente) => {
      return (
        <Card
          key={cliente.cliente}
          backgroundImage={cliente.backgroundImage}
          cliente={cliente.cliente}
          href={cliente.href} target="_blank" alt={cliente.alt}
        />
      )
    }
  );
  const classes = "grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 place-items-center mx-auto"

  return (
    <Section id="portfolio">
      <Container className={classes}>
        {clientListCard}
      </Container>
    </Section>
  )
};

export default Portfolio