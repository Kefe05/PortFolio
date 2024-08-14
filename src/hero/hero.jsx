import './hero.css'
import { FaAddressCard } from "react-icons/fa";
import  {FaEarthEurope} from "react-icons/fa6"
import banker from "../assets/banker.avif"


function Hero (){
return(
  <section className='hero'> 
    <div>
    <div className="name ">
      <h1 className='from-left'>Oghenekefe</h1>
      <h1 className='from-top'>Okpare</h1>
    </div>
    <div className="info from-left">
      <h2>
        FullStack Web Developer and Cloud Computing Engineer.
      </h2>
      <ul className='d-me'>
        <li>
        <FaAddressCard />          
        <span>Optimistic and Positive</span>
        </li>
        <li>
          <FaEarthEurope/>
          <span>Based in Lagos, Nigeria</span>
        </li>
        <li>
        <FaAddressCard />      
          <span>Optimistic and Positive</span>
        </li>
        <li>
        <FaAddressCard />      
          <span>Optimistic and Positive</span>
        </li>
      </ul>
    </div>

    </div>
   
    <div>
      <img className="banker" src={banker} alt=""></img>
    </div>
 </section>
)
}

export default Hero