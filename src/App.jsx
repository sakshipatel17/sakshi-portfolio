import React from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/ui/CustomCursor';
import Hero from './components/Hero';
import StackShowcase from './components/StackShowcase';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Research from './components/Research';
import Workflow from './components/Workflow';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <StackShowcase />
      <About />
      <Skills />
         <Workflow />
         <Projects />
      <Research />
      <Experience />
      <Education />
      <Certifications />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
