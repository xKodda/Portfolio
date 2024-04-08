import { Resend } from 'resend';

const resend = new Resend('re_8871jTc1_54afV6doNiyf19xkQPYnwkcC');

(async function () {
  const { data, error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: ['christofergodcer@gmail.com'],
    subject: 'Contacto desde mi portfolio',
    html: '<strong>Testing</strong>',
  });

  if (error) {
    return console.error({ error });
  }

  console.log({ data });
})();
