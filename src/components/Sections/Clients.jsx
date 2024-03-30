import Section from "../Templates/Section";
import { clientes } from "../../data";
import Container from "../Templates/Container";


const Clients = () => {

  const containerClasses =
    "grid grid-cols-2 sm:grid-cols-4 lg:gap-16 items-center justify-evenly gap-8 px-8 lg:px-0";

  const clientListDisplay =
    clientes.map(
      (cliente) => {
        return (
          <a key={cliente.id} href={cliente.href} target="_blank" alt={cliente.alt}>
            <img src={cliente.logo} alt={cliente.cliente} className=" w-32 h-auto m-auto animate_animated animate__swing object-cover" loading="lazy" />
          </a>
        )
      }
    );

  return (
    <Section id="clientes" className="bg-gradient-to-r from-slate-700 to-slate-900 w-full px-4">
      <Container className={containerClasses}>
        {clientListDisplay}
      </Container>
    </Section>
  )
};

export default Clients