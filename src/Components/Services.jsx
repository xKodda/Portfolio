import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, FaBootstrap, FaCloud } from 'react-icons/fa';

const Services = () => {
  return (
    <div id="Services" className="p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">
        Stack
      </h1>

      {/* Frontend */}
      <div className="mb-20">
        <h2 data-aos="fade-left" className="text-2xl font-semibold mb-8 text-white">
          Frontend
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 justify-around gap-10">
          <div
            data-aos="fade-up"
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            <FaHtml5 className="text-[32px] text-orange-500 mb-4" />
            <h3 className="text-lg font-semibold">HTML5</h3>
          </div>
          <div
            data-aos="fade-down"
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            <FaCss3 className="text-[32px] text-blue-500 mb-4" />
            <h3 className="text-lg font-semibold">CSS3</h3>
          </div>
          <div
            data-aos="fade-down"
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            <FaJs className="text-[32px] text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold">JavaScript</h3>
          </div>
          <div
            data-aos="fade-up"
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            <FaReact className="text-[32px] text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold">React</h3>
          </div>
          <div
            data-aos="fade-down"
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            <FaBootstrap className="text-[32px] text-purple-600 mb-4" />
            <h3 className="text-lg font-semibold">Bootstrap</h3>
          </div>
          <div
            data-aos="fade-up"
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            <FaCloud className="text-[32px] text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold">Tailwind CSS</h3>
          </div>
        </div>
      </div>

      {/* Backend */}
      <div className="mb-20">
        <h2 data-aos="fade-right" className="text-2xl font-semibold mb-8 text-fuchsia-500">
          Backend
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 justify-around gap-10">
          <div
            data-aos="fade-up"
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            <FaNodeJs className="text-[32px] text-green-500 mb-4" />
            <h3 className="text-lg font-semibold">Node.js</h3>
          </div>
          <div
            data-aos="fade-down"
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            <FaDatabase className="text-[32px] text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold">SQL</h3>
          </div>
          <div
            data-aos="fade-up"
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            <FaDatabase className="text-[32px] text-blue-600 mb-4" />
            <h3 className="text-lg font-semibold">PostgreSQL</h3>
          </div>
          <div
            data-aos="fade-down"
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub className="text-[32px] text-gray-700 mb-4" />
            <h3 className="text-lg font-semibold">Git/GitHub</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;