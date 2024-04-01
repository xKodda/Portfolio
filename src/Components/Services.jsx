import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';

const Services = () => {
    return (
        <div id="Services" className="p-20 flex flex-col items-center justify-center">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"> Services</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 justify-around gap-20">
                <FaHtml5 data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow" />
                <FaCss3 data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow" />
                <FaJs data-aos="fade-up" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow" />
                <FaReact data-aos="fade-down" className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow" />
            </div>
        </div>
    );
};
export default Services;