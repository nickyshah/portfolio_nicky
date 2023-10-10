
import './App.css';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';
import { Hero } from './Components/Hero';
import { Info } from './Components/Info';
import { Navbar } from './Components/Navbar';
import { Projects } from './Components/Projects';
import { Skills } from './Components/Skills';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <><input type="checkbox" id="darkMode"/>
    <div className="wrapper">
    <label for="darkMode" class="dark-mode-toggle"><i class="fa-solid fa-circle-half-stroke"></i></label>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Hero />}/>
      <Route path="/info" element={ < Info />}/>
      <Route path="/skills" element={<Skills />}/>
      <Route path="/projects" element={< Projects />}/>
      <Route path="/about" element={ <About />}/>
      <Route path="/contact" element={ <Contact/>}/>
    </Routes>
    <Footer /> 
    
     {/* < Info />
     <Skills />
     < Projects />
     <About />
     <Contact/>
     <Footer /> */}
    </div>
    </>
  );
};

export default App;
