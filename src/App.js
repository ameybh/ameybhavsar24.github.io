import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'
import Navigation from './components/Navigation/Navigation'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <About />
    </div>
  )
}

export default App
