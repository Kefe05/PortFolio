import './skills.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoFigma } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiMui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";


function Skills(){


  return(
    <section className="skills">
      <div className="using">
        <h2>Using Now:</h2>
        <div>
          <div className="all-using">
          <div className="tool html">
        <FaHtml5 />
        <span>HTML5</span>
        </div>
        <div className="tool css">
        <FaCss3Alt/>
        <span>CSS3</span>
        </div>
        <div className="tool js">
        <IoLogoJavascript/>
        <span>Javascript</span>
        </div>
        <div className="tool git">
        <FaGitAlt/>
        <span>Git</span>
        </div>
        <div className="tool react">
        <FaReact />
        <span>React</span>
        </div>
        <div className='tool figma'>
        <IoLogoFigma/>
        <span>Figma</span>
        </div>
        <div className="tool bootstrap">
        <FaBootstrap/>
        <span>Bootstrap</span>
        </div>
        <div className="tool typescript">
        <SiTypescript/>
        <span>Typescript</span>
        </div>
          </div>
        </div>
      </div>
      <div className="learning">
        <h2>Learning:</h2>
        <div className='all-learning'>
         <div className="tool nxtjs">
         <RiNextjsFill />
         <span>NEXTJS</span>
         </div>
         <div className="tool mui">
         <SiMui/>
          <span>Material Ui</span>
          </div> 
        <div className="node tool">
        <FaNodeJs/>
        <span>Node js</span>
        </div>
         <div className="mongodb tool">
         <SiMongodb/>
         <span>Mongo Db</span>
         </div>
        </div>
      </div>
    </section>
  )
}


export default Skills