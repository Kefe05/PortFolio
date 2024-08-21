import Header from "./header/header" 
import Hero from "./hero/hero"
import Project from "./Projects/project"
import About from "./About/about"
import Footer from "./footer/footer"
import { Container } from "@mui/material"

function App (){
return(
   <>
    <Header/>
    <Hero />
    <About/>
    <Project />
    <Footer />
    </>
)
}

export default App