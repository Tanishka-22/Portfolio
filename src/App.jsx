import { Navbar, Footer } from "./components/layout";
import { Hero, Technologies, Projects, Education, Experience, Contact } from "./sections";
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased h-full selection:bg-darkslategrey-500  selection-text-cyan-900">
        <div className="fixed top-0 -z-10 h-full w-full"></div>
        <div className="absolute top-0 z-[-2] h-full w-full ">
        
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Navbar />
          <Hero />
          <Technologies/>
          <Projects />
          <Education />
          <Experience />
          <Contact/>
          <Footer />
        </div>
        </div> 
        <Analytics />
    </div>
  );
};

export default App;
