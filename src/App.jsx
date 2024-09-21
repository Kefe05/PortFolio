import Header from "./header/header" 
import Hero from "./hero/hero"
import Project from "./Projects/project"
import About from "./About/about"
import Footer from "./footer/footer"
import Skills from "./skills/skills"

function App (){
return(
  <div className="app-container">
    <Header/>
    <Hero />
    <About/>
    <Skills />
    <Project />
    <Footer />
  </div>
)
}

export default App