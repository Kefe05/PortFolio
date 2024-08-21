import './hero.css'
import separator from '../assets/separatorWhite.png'
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
// import { FaAddressCard } from "react-icons/fa";
// import  {FaEarthEurope} from "react-icons/fa6"
// import banker from "../assets/banker.avif"


function Hero (){
return(
  <section className='hero'> 
    <div className="bg">
      <div className="name">
        <h1 className='from-left'>Oghenekefe</h1>
        <h1 className='from-top'>Okpare</h1>
      </div>
      <div className="info from-left">
        <h2>
        FrontEnd Developer
        </h2> 
      </div>
      <img src={separator} alt="" id='separator'/>
      <div className="contact-links">
        <FaXTwitter/>
        <FaLinkedin />
        <FaGithub />
      </div>
    </div>
 </section>
)
}

export default Hero