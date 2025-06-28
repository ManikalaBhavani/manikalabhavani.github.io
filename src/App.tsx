import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-beige-50">
      <Header />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;