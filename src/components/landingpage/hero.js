import React from 'react';


const Hero=()=>{
    return(
        <section id="hero">
          <div className="container">
             <div className="main_hero">
               <div className="hero_txt">
                  <h1>Comic books to me are fairy tales for grown-ups </h1>
                  <p>stan lee</p>
                  <button type="button">explore now</button>
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