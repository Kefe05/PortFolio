import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import logo from '../assets/logo.svg'
import './footer.css'


function Footer(){
  return(
    <footer>
      
      <div className="contact-ctn">
        <div id="logo-ctn"> <img src={logo} alt="" id='footer-logo'/></div>
        <h2>Contact Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <hr />
        <form action="" id="footer-form">
        <label>Email</label>
        <input type="email" name="contact-email" id="contact-email" />
        <label>Name</label>
        <input type="text" name="contact-name" id="contact-name" />
        <button id='footer-contact-btn'>Contact</button>
        </form>
      </div>
      <div className="footer-links">
        <FaGithub />
        <FaXTwitter />
        <FaTiktok />
        <FaLinkedin/>
      </div>
    </footer>
  )
}

export default Footer