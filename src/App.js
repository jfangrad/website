import React, { useState, useEffect } from 'react';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import './App.scss';

const App = () => {
  const [showingIntro, setShowingIntro] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowingIntro(false), 5000);
  }, []);

  return (
    <div className="App">
      {showingIntro && <Intro />}
      <NavBar />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
