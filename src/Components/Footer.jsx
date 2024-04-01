import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* <div className="mb-4 md:mb-0">
          <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">
            Logo
          </span>
          <p className="text-[16px] my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            saepe quidem accusantium? Voluptates dignissimos quasi
            exercitationem unde esse, eaque quos nam iure dolor expedita!
            Laborum voluptatibus ex eligendi totam eos?
          </p>
        </div> */}
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Servicios
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Desarrollador Web</li>
            <li className="my-2">Diseño Web</li>
            <li className="my-2">Web E-commerce</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Contacto
          </h2>
          <p className="text-[16px] my-4">Email: christofergodcer@gmail.com</p>
          <p className="text-[16px] my-4">Teléfono: +569 78785893</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Sigueme!
          </h2>
          <div className="flex space-x-4">
            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://github.com/xKodda">
              <FaGithub />
            </a>
            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://www.linkedin.com/in/christofer-godoy-cerda/">
              <FaLinkedinIn />
            </a>
            <a className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out" href="https://twitter.com/IChristoferI">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
