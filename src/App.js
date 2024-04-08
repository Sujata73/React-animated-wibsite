
import './App.css';
import './index.css'
import Navbar from './components/Navbar'
import Home from './components/Home';
import Aos from "aos";
import "aos/dist/aos.css" 
import Skill from './components/skill';
import { useEffect } from 'react';
import Experince from '../src/components/Experince'
import Project from './components/project';
import Contact from './components/Contact';
function App() {
  useEffect(() => {
    Aos.init();
    
   }, [])
  return (
<>
<Navbar/>
<Home/>
<Experince/>
<Skill/>
<Project/>
<Contact/>
</>
     
  );
}

export default App;
