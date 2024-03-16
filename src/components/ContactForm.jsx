// import { FaRegEnvelope } from "react-icons/fa6";

const ContactForm = () => {
  8
  return (
    <article id="formulario" className="border-2  border-cyan-600 rounded-md px-8 py-10 pb-14 bg-gradient-to-r from-slate-700 to-slate-900  text-slate-100 ">
      <form action="mailto:dspwebstudio.com" className="flex flex-col gap-6">
        <div className="flex flex-wrap justify-between gap-4">
          <div className="shield flex flex-col sm:w-[35%] w-full">
            <label htmlFor="" className="mb-2 text-lg">Nombre</label>
            <input type="text" name="name" id="name" className="rounded-md text-slate-900 bg-slate-200 px-4 py-3 text-lg" placeholder="John" />
          </div>
          <div className="shield flex flex-col w-full sm:w-[55%]">
            <label htmlFor="" className="mb-2 text-lg">Apellido</label>
            <input type="text" name="name" id="surname" className="rounded-md text-slate-900 bg-slate-200 px-4 py-3 text-lg" placeholder="Doe" />
          </div>
        </div>
        <div className="shield flex flex-col">
          <label htmlFor="" className="mb-2 text-lg">Correo Electrónico</label>
          <input type="email" name="name" id="email" className="rounded-md text-slate-900 bg-slate-200 px-4 py-3 text-lg" placeholder="johndoe@email.com" />
        </div>
        <div className="shield flex flex-col">
          <label htmlFor="" className="mb-2 text-lg">Número Telefónico</label>
          <input type="text" name="name" id="name" className="rounded-md text-slate-900 bg-slate-200 px-4 py-3 text-lg" />
        </div>
        <div className="shield flex flex-col">
          <label htmlFor="" className="mb-2 text-lg">Mensaje</label>
          <textarea type="text" name="name" id="name" className="rounded-md text-slate-900 bg-slate-200 p-4 min-h-40 max-h-40 text-lg" />
        </div>
        <input type="submit" className="mt-6 bg-gradient-to-r from-blue-500 to-blue-900  text-white rounded-md py-8 sm:py-4 px-6 text-2xl sm:text-lg hover:bg-slate-700" value={'Enviar'} />
      </form>

    </article>
  )
}

export default ContactForm