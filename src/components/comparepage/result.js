import React from 'react';
import Compare_result_number from './compare_result_number';
import Compare_result_announcement from './compare_result_announcement';
const Result=(props)=>{
     return(
         <section id="result">
             <div className="container">
                <div className="compare_main_result">
                    <div className="result_superhero1">
                         <div className="compare_result_image">
                            <img src="../src/img/batman 1.png" alt="batman_img"/>
                         </div>
                         <div className="compare_result_heading">
                             <h2>batman</h2> 
                         </div>
                         <div className="compare_result_data">
                             <div className="intelligence">
                             <p>intelligence:100</p>
                             </div>
                             <div className="strength">
                             <p>strength:200</p>
                             </div>
                            <div className="speed">
                            <p>speed:100</p>
                            </div>
                            <div className="durability">
                            <p>durability:100</p>
                            </div>
                            <div className="power">
                            <p>power:100</p>
                            <img src="../src/img/lost_signal_btn.svg"/>
                            </div>
                             <div className="combat">
                             <p>combat:100</p>
                             <img src="../src/img/win-signal_btn.svg"/>
                             </div>
                             
                         </div>
                    </div>
                    <div className="result_superhero2">
                    <div className="compare_result_image">
                            <img src="../src/img/batman 1.png" alt="batman_img"/>
                         </div>
                         <div className="compare_result_heading">
                             <h2>batman</h2> 
                         </div>
                         <div className="compare_result_data">
                             <div className="intelligence">
                             <p>intelligence:100</p>
                             </div>
                             <div className="strength">
                             <p>strength:200</p>
                             </div>
                            <div className="speed">
                            <p>speed:100</p>
                            </div>
                            <div className="durability">
                            <p>durability:100</p>
                            </div>
                            <div className="power" style={{display:"flex"}}>
                            <p>power:100</p>
                            <img src="../src/img/lost_signal_btn.svg"/>
                            </div>
                             <div className="combat" style={{display:"flex"}}>
                             <p>combat:100</p>
                             <img src="../src/img/win-signal_btn.svg"/>
                             </div>
                             
                         </div>
                    </div>
                </div>
                <Compare_result_number/>
                <Compare_result_announcement/> 
             </div>
         </section>
     )
}

export default Result;