import Section from "../Templates/Section";
import { clientes } from "../../data";
import Container from "../Templates/Container";


const Clients = () => {

  const containerClasses =
    "grid grid-cols-2 sm:grid-cols-5 lg:gap-16 items-center justify-evenly gap-8";
  return (
    <Section id="clients" className="bg-gradient-to-r from-slate-700 to-slate-900 w-full px-4">
      <Container className={containerClasses}>
        {clientes.map(
          cliente => {
            return (
              <a key={cliente.id} href={cliente.href} target="_blank" alt={cliente.alt}>
                <img src={cliente.logo} alt={cliente.cliente} className="m-auto animate_animated animate__swing object-cover" loading="lazy" width={250} height={151} />
              </a>
            )
          }
        )}
      </Container>
    </Section>
  )
};

export default Clients