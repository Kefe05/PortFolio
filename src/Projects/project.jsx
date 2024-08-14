import {Swiper, useSwiper, SwiperSlide} from 'swiper/react'
import data from '../assets/project.json'
import 'swiper/css';
import './project.css'

function Project(){


  return(
  <section className="projects">
    <h2>Projects</h2>
    

   
    <Swiper slidesPerView={3}
     breakpoints={{
      1000: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      600: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    }}
    >
      {
        data.map((project,i) => (
          <SwiperSlide key={i}>
          <div className="myProjects">
            <h3>{project.name}</h3>
            <img src={project.image} alt={project.image} />
            <p className="project-description">
              {project.description}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, magni!
            </p>
            <button>Website</button>
          </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
     
  </section>
  )
}


export default Project