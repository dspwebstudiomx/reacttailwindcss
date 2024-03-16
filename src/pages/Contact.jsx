import PageTemplate from "../components/Templates/PageTemplate"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <PageTemplate TituloPrincipal="Contacto" background="bg-slate-300">
      <ContactForm />
    </PageTemplate>
  )
}

export default Contact