import Section from "../Templates/Section";
import { clientes } from "../../data";
import Container from "../Templates/Container";
import Card from "../Molecules/Card"


const Portfolio = () => {
  const clientListCard = clientes.map(
    (cliente) => {
      return (
        <Card
          key={cliente.cliente}
          backgroundImage={cliente.backgroundImage}
          cliente={cliente.cliente}
          href={cliente.href} target="_blank" alt={cliente.altPortolio}
        />
      )
    }
  );
  const classes = "grid sm:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center"

  return (
    <Section id="portafolio" className={'dark:bg-slate-800'}>
      <Container className={classes}>
        {clientListCard}
      </Container>
    </Section>
  )
};

export default Portfolio