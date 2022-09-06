import React from 'react'
import "./Home.css"
import web from "../images/undraw_studying_re_deca.svg";
import Common from './Common';

function Home() {
  console.log("00000inhome")
  return (
   <>
   <div className="home-content">
   <Common
           starting="Grow Yourself With US"
           middle= "Self-education is the only possible education the rest is mere veneer laid on the surface of a child's nature."
           get= "Get Started"
           image={web}
       />

   </div>
      
   </>
  )
}

export default Home