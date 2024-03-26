// import { FaRegEnvelope } from "react-icons/fa6";

const ContactForm = () => {
  8
  return (
    <article id="formulario" className="border-4  border-cyan-600 rounded-lg px-8 py-10 pb-14 bg-slate-900  text-slate-100 ">
      <form action="mailto:dspwebstudio@gmail.com" className="flex flex-col gap-3" method="POST" name="EmailForm">
        <div className="flex flex-wrap justify-between gap-3">
          <div className="shield flex flex-col sm:w-[50%] w-full">
            <label htmlFor="" className="mb-2" id="name">Nombre</label>
            <input type="text" name="name" id="name" className="rounded-md text-slate-900 bg-slate-200 px-4 py-3 text-lg" placeholder="John" />
          </div>
          <div className="shield flex flex-col sm:w-[45%] w-full">
            <label htmlFor="" className="mb-2" id="surname">Apellido</label>
            <input type="text" name="surname" id="surname" className="rounded-md text-slate-900 bg-slate-200 px-4 py-3 text-lg" placeholder="Doe" />
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3">
          <div className="shield flex flex-col sm:w-[50%] w-full">
            <label htmlFor="" className="mb-2" id="email">Correo Electrónico</label>
            <input type="email" name="email" id="email" className="rounded-md text-slate-900 bg-slate-200 px-4 py-3 text-lg" placeholder="johndoe@email.com" />
          </div>
          <div className="shield flex flex-col sm:w-[45%] w-full">
            <label htmlFor="" className="mb-2" id="number">Número Telefónico</label>
            <input type="text" name="phone" id="number" className="rounded-md text-slate-900 bg-slate-200 px-4 py-3 text-lg" />
          </div>
        </div>
        <div className="shield flex flex-col">
          <label htmlFor="" className="mb-2 " id="message">Mensaje</label>
          <textarea type="text" name="message" id="message" className="rounded-md text-slate-900 bg-slate-200 p-4 min-h-40 max-h-40" />
        </div>
        <input type="submit" className="mt-6 bg-gradient-to-r from-blue-500 to-blue-900  text-white rounded-md p-6 text-2xl sm:text-xl hover:bg-slate-700 sm:w-[35%] w-[100%] mx-auto">
        </input>
      </form>

    </article >
  )
}

export default ContactForm