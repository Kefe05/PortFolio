import Header from "./header/header" 
import Hero from "./hero/hero"
import Project from "./Projects/project"
import About from "./About/about"
import Footer from "./footer/footer"

function App (){
return(
  <div className="app-container">
    <Header/>
    <Hero />
    <About/>
    <Project />
    <Footer />
  </div>
)
}

export default App