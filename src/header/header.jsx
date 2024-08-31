import './header.css'
import logo from '../assets/logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";


function Header(){
  let headerList =  ['Portfolio','About','Skills','Contact']


  return(
    <header className='flexItem bigWhite'>
      <img src={logo} alt="" id='logo'/>

      
      <div className="links">
      <GiHamburgerMenu  id='hamburger-menu'/>
      {headerList.map((headerItem, index) => (
        <a href="" key={index} className='bigWhite navigation-links'>{headerItem}</a>
      ))}
      </div>
   </header>
  )
}

export default Header