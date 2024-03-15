// import { FaRegEnvelope } from "react-icons/fa6";

const ContactForm = () => {
  8
  return (
    <article id="formulario" className="border-2  border-slate-600 rounded-md px-8 py-6 pb-14 bg-slate-400 text-slate-900">
      <form action="mailto:dspwebstudio.com" className="flex flex-col gap-6">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="shield flex flex-col sm:w-[35%] w-full">
            <label htmlFor="" className="mb-2">Nombre</label>
            <input type="text" name="name" id="name" className="rounded-md bg-slate-300 px-4 py-2" placeholder="John" />
          </div>
          <div className="shield flex flex-col w-full sm:w-[55%]">
            <label htmlFor="" className="mb-2">Apellido</label>
            <input type="text" name="name" id="surname" className="rounded-md bg-slate-300 px-4 py-2" placeholder="Doe" />
          </div>
        </div>
        <div className="shield flex flex-col">
          <label htmlFor="" className="mb-2">Email</label>
          <input type="email" name="name" id="email" className="rounded-md bg-slate-300 px-4 py-2" placeholder="johndoe@email.com" />
        </div>
        <div className="shield flex flex-col">
          <label htmlFor="" className="mb-2">Phone</label>
          <input type="text" name="name" id="name" className="rounded-md bg-slate-300 px-4 py-2" />
        </div>
        <div className="shield flex flex-col">
          <label htmlFor="" className="mb-2">Mensaje</label>
          <textarea type="text" name="name" id="name" className="rounded-md bg-slate-300 p-4 min-h-24 max-h-24" />
        </div>
        <input type="submit" className="bg-slate-800 text-white rounded-md py-4 px-6 text-lg hover:bg-slate-700" value={'Enviar'} />
      </form>

    </article>
  )
}

export default ContactForm