import React from 'react';
import {Link} from 'react-router-dom'

const Hero=()=>{
    return(
        <section id="hero">
          <div className="container">
             <div className="main_hero">
               <div className="hero_txt">
                  <h1>Comic books to me are fairy tales for grown-ups </h1>
                  <p>stan lee</p>
                  <Link to="/home" style={{textDecoration:"none"}}>
                  <button type="button">explore now</button>
                  </Link>
              
               </div>
               <div  className="hero_img">
                  <div className="main_img">
                     <img src="../src/img/landing_img.png" alt="landing_page"/>
                  </div>
               </div>
             </div>
          </div>
        </section>
    )
}

export default Hero;