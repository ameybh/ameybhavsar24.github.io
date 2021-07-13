import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Work from './components/Work/Work'
import Contact from './components/Contact/Contact'
import ParticleView from './particles'
function App() {
  return (
    <>
      <ParticleView />
      <div className="App">
        <Navigation />
        <Hero />
        <About />
        <Work />
        <Contact />
      </div>
    </>
  )
}

export default App
