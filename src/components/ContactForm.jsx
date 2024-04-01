import { useRef, useState } from 'react';
import { FaRegEnvelope } from "react-icons/fa6"
import { Formik, Field, Form } from 'formik';
import emailjs from '@emailjs/browser';
import Button from './Button';

export default function ContactForm() {

  const form = useRef();
  const [showModal, setShowModal] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_sitioweb', 'template_dspwebstudio', form.current, {
        publicKey: '6zZtQ17TWIZUgres6',
      })
      .then(
        () => {
          console.log("SUCCESS!")
          setShowModal(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    // e.target.reset();
  };
  if (showModal) {
    document.body.classList.add('modal-active')
  } else {
    document.body.classList.remove('modal-active')
  }


  return (
    <article id="formulario" className="border-4  border-cyan-600 rounded-2xl px-8 py-10 pb-14 bg-slate-900  text-slate-100 ">
      <Formik
        initialValues={{
          user_name: '',
          user_surname: '',
          user_email: '',
          user_phone: '',
          message: ''
        }}
        validate={
          values => {
            let errors = {};
            if (!values.user_name) {
              errors.user_name = 'Solo debe de contener letras'
            } else if (values.user_name.length < 2) {
              errors.user_name = 'Ingrese al menos 2 letras'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_name)) {
              errors.user_name = 'No debe de contener números'
            } else if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_name)) {
              errors.user_name = 'Nombre Correcto'
            }

            if (!values.user_surname) {
              errors.user_surname = 'Solo debe de contener letras'
            } else if (values.user_surname.length < 2) {
              errors.user_surname = 'Ingrese al menos 2 letras'
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_surname)) {
              errors.user_surname = 'No debe de contener números'
            } else if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.user_surname)) {
              errors.user_surname = 'Apellido correcto '
            }

            if (!values.user_email) {
              errors.user_email = 'Requerido';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)) {
              errors.user_email = 'Email no valido';
            } else if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)) {
              errors.user_email = 'Email correcto';
            }
            if (!values.user_phone) {
              errors.user_phone = 'Solo se aceptan números y símbolo + al comienzo'
            } else if (!/^[+]+[0-9]+$/.test(values.user_phone)) {
              errors.user_phone = "Hace falta el simbolo de + al comienzo"
            } else if (/^[+]+[0-9]+$/.test(values.user_phone)) {
              errors.user_phone = "Número telefónico correcto"
            }
            if (!values.message) {
              errors.message = 'Mensaje requerido'
            }
            return errors;
          }
        }
        onSubmit={({ resetForm }) => {
          resetForm()
        }}
      >
        {({ errors, touched }) => (
          <Form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8">
            <div className="flex flex-wrap justify-between gap-3">
              <div className="shield flex flex-col lg:w-[50%] w-full">
                <label htmlFor='user_name' className="mb-2">Nombre<span className='text-blue-400 ml-1'>*</span></label>
                <Field
                  id="user_name"
                  name="user_name"
                  className="rounded-md text-slate-900 bg-slate-200 px-4 py-3 focus:border-2 border-blue-500"
                  type="text"
                  placeholder="John"
                  required
                />
                {touched.user_name && errors.user_name && <p className='mt-2 text-blue-400 text-xs'>* {errors.user_name}</p>}
              </div>
              <div className="shield flex flex-col lg:w-[45%] w-full">
                <label htmlFor='user_surname' className="mb-2">Apellido<span className='text-blue-400 ml-1'>*</span></label>
                <Field
                  className="rounded-md text-slate-900 bg-slate-200 px-4 py-3"
                  id="user_surname"
                  name="user_surname"
                  placeholder="Doe"
                  required
                />
                {touched.user_surname && errors.user_surname && <p className='mt-2 text-blue-400 text-xs'>* {errors.user_surname}</p>}

              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-3">
              <div className="shield flex flex-col lg:w-[50%] w-full">
                <label htmlFor="user_email" className="mb-2">Correo Electrónico<span className='text-blue-400 ml-1'>*</span></label>
                <Field
                  className="rounded-md text-slate-900 bg-slate-200 px-4 py-3"
                  id="user_email"
                  name="user_email"
                  placeholder="johndoe@email.com"
                  type="email"
                  required
                />
                {touched.user_email && errors.user_email && <p className='mt-2 text-blue-400 text-xs'>* {errors.user_email}</p>}

              </div>
              <div className="shield flex flex-col lg:w-[45%] w-full">
                <label htmlFor="user_phone" className="mb-2">Número Telefónico<span className='text-blue-400 ml-1'>*</span></label>
                <Field
                  className="rounded-md text-slate-900 bg-slate-200 px-4 py-3"
                  type="text"
                  name="user_phone"
                  id="user_phone"
                  required
                />
                {touched.user_phone && errors.user_phone && <p className='mt-2 text-blue-400 text-xs'>* {errors.user_phone}</p>}

              </div>
            </div>
            <div className="flex flex-col w-full mb-6">
              <label htmlFor="message" className="mb-2">Mensaje<span className='text-blue-400 ml-1'>*</span></label>
              <textarea
                type="text"
                name="message"
                id="message"
                className="rounded-md text-slate-900 bg-slate-200 px-4 py-3 min-h-40 max-h-40"
                required
              />
              {touched.message && errors.message && <p className='mt-2 text-blue-400 text-xs'>* {errors.message}</p>}

            </div>
            <button type='submit' className="bg-gradient-to-r from-blue-500 to-blue-900  text-white rounded-md p-6 text-xl hover:bg-slate-700 sm:w-[45%] w-[100%] mx-auto flex items-center justify-center" >
              <FaRegEnvelope className="mr-2" />
              Enviar mensaje
            </button>
            {showModal &&
              (<div id='modal' className='fixed inset-0 flex justify-center items-center z-0'>
                <div id='modal-overlay' className='fixed inset-0 z-0'></div>
                <div id='modal-window' className='fixed w-[85%] sm:w-[50%] lg:w-[400px] h-auto bg-slate-100 rounded-xl text-slate-900 flex flex-col items-center justify-center z-3 p-12 py-16 lg:p-8 border-blue-500 border-4 shadow-2xl'>
                  <h1 className='text-center text-2xl sm:text-[16px] font-bold tracking-wider leading-snug'>Mensaje enviado satisfactoriamente</h1>
                  <Button
                    href='/'
                    functionButton='{() => setShowModal(false)'
                    texto='Cerrar'
                  />
                </div>
              </div>)
            }
          </Form>
        )}
      </Formik>
    </article >
  )
}