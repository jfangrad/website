import React from 'react';
import NavBar from './components/NavBar';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
