import Section from "../Templates/Section";
import { clientes } from "../../data";
import Container from "../Templates/Container";
import Card from "../Card"


const Portfolio = () => {

  const containerClasses =
    "sm:grid-cols-2 lg:gap-6 items-center place-items-stretch gap-12";

  const clientListCard =
    clientes.map(
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

  return (
    <Section id="portfolio" className="bg-red-500">
      <Container className={containerClasses}>
        {clientListCard}
      </Container>
    </Section>
  )
};

export default Portfolio