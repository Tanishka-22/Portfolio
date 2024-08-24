import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased h-full selection:bg-darkslategrey-500  selection-text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full"></div>
        <div className="absolute top-0 z-[-2] h-full w-full ">
        
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Navbar />
          <Profile />
          <Technologies/>
          <Projects />
          <Education />
          <Contact/>
          <Footer />
        </div>
        </div> 
    </div>
  );
};

export default App;

















