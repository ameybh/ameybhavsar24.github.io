import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Particles from 'react-particles-js';
import { particles } from './particles';
function App() {
  return (
    <div className="wrapper">
      <Particles
        style={{
          position: 'absolute',
          zIndex: 0,
          top: 0,
          height: '100%',
          width: '100vw',
        }}
        params={particles}
      />
      <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
