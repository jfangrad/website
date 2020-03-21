import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Intro from './components/Intro';
import NavBar from './components/NavBar';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import './App.scss';

const App = () => {
  const [showingIntro, setShowingIntro] = useState(true);
  const [shouldFade, setShouldFade] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowingIntro(false), 5000);
    setTimeout(() => setShouldFade(true), 4300);
  }, []);

  const appClassName = classNames('App', { 'App-no-overflow': !shouldFade });

  return (
    <div className={appClassName}>
      {showingIntro && <Intro fade={shouldFade} />}
      <NavBar />
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
