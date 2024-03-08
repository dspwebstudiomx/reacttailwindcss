import Section from "../Templates/Section";
import { clientes } from "../../data";
import Container from "../Templates/Container";


const Clients = () => {

  const containerClasses =
    "grid-cols-2 sm:grid-cols-4 lg:gap-6 items-center place-items-stretch";

  const clientListDisplay =
    clientes.map(
      (cliente) => {
        return (
          <a key={cliente.id} href={cliente.href} target="_blank" alt={cliente.alt}>
            <img src={cliente.logo} alt={cliente.cliente} width={120} />
          </a>
        )
      }
    );

  return (
    <Section id="clientes" className="bg-slate-600 w-full">
      <Container className={containerClasses}>
        {clientListDisplay}
      </Container>
    </Section>
  )
};

export default Clients