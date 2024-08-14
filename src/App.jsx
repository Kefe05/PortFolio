import Header from "./header/header" 
import Hero from "./hero/hero"
import Project from "./Projects/project"
import Education from "./Education/edu"
import About from "./About/about"
import Footer from "./footer/footer"

function App (){
return(
  <div>
    <Header/>
    <Hero />
    <About/>
    <Project />
    <Education />
    <Footer />
  </div>
)
}

export default App