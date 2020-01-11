import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import About from './sections/About';
import Skills from './sections/Skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Skills />
    </div>
  );
}

export default App;
