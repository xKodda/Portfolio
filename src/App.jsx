import About from "./Components/About";
import Banner from "./Components/Banner";
import Nav from "./Components/Nav";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true);
    setTimeout(()=> {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div className="bg-slate-900">
      <Nav/>
      <Banner/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;