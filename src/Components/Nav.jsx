import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
  const [click, setclick] = useState(false);

  const handleClick = () => setclick(!click);

  const content = (
    <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 p-4 sm:p-8 md:p-12 lg:p-20">
      <ul className="text-xl sm:text-2xl md:text-3xl p-4 sm:p-8 md:p-12 lg:p-20">
        <Link spy={true} smooth={true} to="Home">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 cursor-pointer">Inicio</li>
        </Link>
        <Link spy={true} smooth={true} to="About">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 cursor-pointer">Sobre Mi</li>
        </Link>
        <Link spy={true} smooth={true} to="Services">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 cursor-pointer">Habilidades</li>
        </Link>
        <Link spy={true} smooth={true} to="Projects">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 cursor-pointer">Proyectos</li>
        </Link>
        <Link spy={true} smooth={true} to="Contact">
          <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 cursor-pointer">Contacto</li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className="w-full">
      <div className="max-w-screen-xl mx-auto h-10vh flex justify-between z-50 text-white lg:py-5 px-4 sm:px-8 md:px-12 lg:px-20 py-4 border-b border-slate-800">
        {/* <div className="flex items-center flex-1">
          <span className="text-3x1 font-bold">Logo</span>
        </div> */}
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Home">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Inicio
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Sobre Mi
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Habilidades
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Proyectos
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Contacto
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden transition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;