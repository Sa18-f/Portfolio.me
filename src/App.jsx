
import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {


  return (
    <div className="font-Wittgenstein">
      <Header />
      <Introduction />
      <About></About>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
