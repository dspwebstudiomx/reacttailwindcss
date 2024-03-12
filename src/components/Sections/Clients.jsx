import Section from "../Templates/Section";
import { clientes } from "../../data";
import Container from "../Templates/Container";


const Clients = () => {

  const containerClasses =
    "grid grid-cols-2 sm:grid-cols-4 lg:gap-12 items-center gap-8";

  const clientListDisplay =
    clientes.map(
      (cliente) => {
        return (
          <a key={cliente.id} href={cliente.href} target="_blank" alt={cliente.alt}>
            <img src={cliente.logo} alt={cliente.cliente} className=" w-24 sm:w-24 lg:w-28 h-auto m-auto" loading="lazy" />
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