
import img from "../assets/Profile3.jpg";

const About = () => {
  return (
    <div id="About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center">
      <img data-aos='fade-down'
        src={img}
        width={290}
        height={290}
        className="rounded border-2 p-1 border-fuchsia-500 img_glow"
        alt=""
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1 data-aos='fade-right' className="text-[52px] font-semibold mb-8 leading-normal uppercase">
          Sobre{" "}
          <span className="text-fuchsia-500">Mi</span>
        </h1>
        <p data-aos='fade-left' className="">
          Soy un desarrollador web full-stack con experiencia en la creación de
          aplicaciones web escalables y robustas. Mi experiencia abarca el
          desarrollo tanto del lado del cliente como del servidor, utilizando
          tecnologías como React para el frontend, y Node.js, Express y bases de
          datos como SQL Server, MySQL y PostgreSQL para el backend. Además,
          tengo habilidades en el uso de herramientas como Tailwind CSS para la
          estilización de interfaces de usuario intuitivas y responsivas. Me
          apasiona mantenerme al día con las últimas tecnologías y prácticas de
          desarrollo para ofrecer soluciones innovadoras y eficientes a los
          desafíos de desarrollo web.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
                <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">Resume</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
