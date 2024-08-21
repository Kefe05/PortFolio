import './header.css'
import logo from '../assets/logo.svg'


function Header(){
  let headerList =  ['Portfolio','About','Skills','Contact']


  return(
    <header className='flexItem bigWhite'>
      <img src={logo} alt="" id='logo'/>

      <div className="links">
      {headerList.map((headerItem, index) => (
        <a href="" key={index} className='bigWhite'>{headerItem}</a>
      ))}
      </div>
   </header>
  )
}

export default Header