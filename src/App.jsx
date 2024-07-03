
import './App.css'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Introduction from './Components/Introduction'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

function App() {


  return (
    <div className="App">
      <Header />
      <Introduction />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
