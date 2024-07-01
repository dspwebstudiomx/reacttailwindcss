import Section from "../Templates/Section";
import { clientes } from "../../data";
import Container from "../Templates/Container"

const Clients = () => {

  const Classes = {
    section: "bg-gradient-to-r from-slate-700 to-slate-900 w-full px-4",
    container: "grid grid-cols-2 sm:grid-cols-5 lg:gap-16 items-center justify-evenly gap-y-16 sm:gap-y-0",
    img: "mx-auto animate_animated animate__swing object-cover"
  }

  return (
    <Section id="clients" className={Classes.section}>
      <Container className={Classes.container}>
        {clientes.map(
          cliente => {
            return (
              <a key={cliente.id} href={cliente.href} target="_blank" alt={cliente.alt}>
                <img src={cliente.logo} alt={cliente.cliente} className={Classes.img} loading="lazy" width={120} height={151} title={cliente.alt} />
              </a>
            )
          }
        )}
      </Container>
    </Section>
  )
};

export default Clients