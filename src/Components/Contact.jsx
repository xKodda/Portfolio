import React, { useState } from 'react';
import { Resend } from 'resend';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formError, setFormError] = useState('');

  const resend = new Resend('re_8871jTc1_54afV6doNiyf19xkQPYnwkcC');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Validación
      if (!formData.name || !formData.email || !formData.message) {
        setFormError('Todos los campos son obligatorios');
        return;
      }

      // Enviar correo electrónico usando Resend
      const { data, error } = await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: ['christofergodcer@gmail.com'],
        subject: 'Contacto desde mi portfolio',
        html: `
          <strong>Nombre:</strong> ${formData.name}<br>
          <strong>Email:</strong> ${formData.email}<br>
          <strong>Mensaje:</strong> ${formData.message}
        `,
      });

      if (error) {
        setFormError('Estoy en proceso de desarrollo!!. Por favor, inténtalo de nuevo más tarde o contactame directamente al correo: christofergodcer@gmail.com, Gracias!! :)');
      } else {
        setFormData({ name: '', email: '', message: '' });
        setFormError('');
        alert('Formulario enviado correctamente');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setFormError('Estoy en proceso de desarrollo!!. Por favor, inténtalo de nuevo más tarde o contactame directamente al correo: christofergodcer@gmail.com, Gracias!! :)');
    }
  };

  return (
    <div id="Contact" className="p-4 lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-white">
        Contactame!
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-6">
          <input
            className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b-glow text-xl text-slate-500"
            placeholder="Ingresa tu Nombre"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b-glow text-xl text-slate-500"
            placeholder="Ingresa tu Email"
            type="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <textarea
          className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b-glow text-xl text-slate-500"
          placeholder="Ingresa tu mensaje..."
          name="message"
          value={formData.message}
          onChange={handleChange}
          cols="20"
          rows="10"
        ></textarea>
        {formError && <p className="text-red-500">{formError}</p>}
        <button
          className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white bg-fuchsia-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative overflow-hidden b_glow text-xl text-bold mb-4"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;