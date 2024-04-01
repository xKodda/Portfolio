import img1 from "../assets/img1.png"
// import img2 from "../assets/img2.png"
// import img3 from "../assets/img3.png"

const Projects = () => {
    return (
        <div id="Projects" className='p-20 flex flex-col items-center justify-center'>
            <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500">Projects</h1>
            <div className="grid-cols-2 justify-center items-center gap-20">
                <img data-aos="fade-up" className="text-[26px] flex items-center justify-center rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow" height={350} width={250} src={img1} alt="" />
                {/* <img data-aos="fade-down" height={350} width={250} className="text-[26px] flex items-center justify-center rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow" src="" alt="" />
                <img data-aos="fade-up" height={350} width={250} className="text-[26px] flex items-center justify-center rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow" src="" alt="" />
                <img data-aos="fade-down" height={350} width={250} className="text-[26px] flex items-center justify-center rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow" src="" alt="" /> */}
            </div>
        </div>
    );
};

export default Projects;