import './header.css'
import audi from "../assets/audi.png"

function Header(){
  return(
    <header>
     <img src={audi} alt="" />
     <div>
       <a href=".hero"> <span>About</span></a> 
       <a href=".education"><span>Education</span></a>
       <a href='.projects'><span>Projects</span></a>
       <a href = "contact"><span>Contact Me</span></a>
     </div>
   </header>
  )
}

export default Header