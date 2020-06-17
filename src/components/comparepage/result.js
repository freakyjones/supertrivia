import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux'
import Compare_result_number from './compare_result_number';
import Compare_result_announcement from './compare_result_announcement';
const Result=(props)=>{  
       const block=useSelector(state=>state.compare_section_display_reducer.display)
       const intelligence=useSelector(state=>state.compare_superhero_reducer.intelligence);
       const strength=useSelector(state=>state.compare_superhero_reducer.strength);
       const power=useSelector(state=>state.compare_superhero_reducer.power);
       const durability=useSelector(state=>state.compare_superhero_reducer.durability);
       const speed=useSelector(state=>state.compare_superhero_reducer.speed);
       const combat=useSelector(state=>state.compare_superhero_reducer.combat);
       const image=useSelector(state=>state.compare_superhero_reducer.image);
       const name=useSelector(state=>state.compare_superhero_reducer.name)
       const isloading=useSelector(state=>state.compare_superhero_reducer.loading)
       console.log(block,intelligence,strength,power,durability,speed,combat,image,name,isloading)
     return(
       
         <section id="result" style={{display:block}}>
           {isloading?<div className="container" style={{justifyContent:'center',alignItems:'center'}} >
             <h1>loading</h1>
           </div>:
             <div className="container">
                <div className="compare_main_result">
                    <div className="result_superhero1">
                      
                        <React.Fragment>
                            <div className="compare_result_image">
                            <img src={image[0]} alt="batman_img" />
                         </div>
                         <div className="compare_result_heading">
                             <h2> {name[0]}</h2> 
                         </div>
                         <div className="compare_result_data">
                             <div className="intelligence">
                               <p>intelligence:{intelligence[0]}</p>
                               {parseInt(intelligence[0],10)>parseInt( intelligence[1],10)?
                               <img src="../src/img/win-signal_btn.svg" />: <img src="../src/img/lost_signal_btn.svg"/>}
                             </div>
                             <div className="strength">
                                 <p>strength:{strength[0]}</p>
                                 {parseInt(strength[0],10)>parseInt( strength[1],10)?
                               <img src="../src/img/win-signal_btn.svg"/>: <img src="../src/img/lost_signal_btn.svg"/>}
                             </div>
                            <div className="speed">
                                 <p>speed:{speed[0]}</p>
                                 {parseInt(speed[0],10)>parseInt(speed[1],10)?
                               <img src="../src/img/win-signal_btn.svg"/>: <img src="../src/img/lost_signal_btn.svg"/>}
                            </div>
                            <div className="durability">
                                 <p>durability:{durability[0]}</p>
                                 {parseInt(durability[0],10)>parseInt( durability[1],10)?
                               <img src="../src/img/win-signal_btn.svg"/>: <img src="../src/img/lost_signal_btn.svg"/>}
                            </div>
                            <div className="power" style={{display:"flex"}}>
                                 <p>power:{power[0]}</p>
                                 {parseInt(power[0],10)>parseInt( power[1],10)?
                               <img src="../src/img/win-signal_btn.svg"/>: <img src="../src/img/lost_signal_btn.svg"/>}
                            </div>
                             <div className="combat" style={{display:"flex"}}>
                                 <p>combat:{combat[0]}</p>
                                 {parseInt(combat[0],10)>parseInt( combat[1],10)?
                               <img src="../src/img/win-signal_btn.svg"/>: <img src="../src/img/lost_signal_btn.svg"/>}
                             </div>
                             
                         </div>
                            </React.Fragment>
                            
                         
                    </div>
                    <div className="vs">
                        <p>vs</p>
                    </div>
                    <div className="result_superhero2">
                    
                        <React.Fragment>
                        <div className="compare_result_image">
                        <img src={image[1]} alt="batman_img"/>
                     </div>
                     <div className="compare_result_heading">
                             <h2>{name[1]}</h2> 
                     </div>
                     <div className="compare_result_data">
                         <div className="intelligence">
                              <p>intelligence:{intelligence[1]}</p>
                              {parseInt(intelligence[0],10)<parseInt( intelligence[1],10)?
                               <img src="../src/img/win-signal_btn.svg"/>: <img src="../src/img/lost_signal_btn.svg"/>}
                         </div>
                         <div className="strength">
                            <p>strength:{strength[1]}</p>
                            {parseInt(strength[0],10)<parseInt(strength[1],10)?
                               <img src="../src/img/win-signal_btn.svg"/>: <img src="../src/img/lost_signal_btn.svg"/>}
                         </div>
                        <div className="speed">
                               <p>speed:{speed[1]}</p>
                               {parseInt(speed[0],10)<parseInt(speed[1],10)?
                               <img src="../src/img/win-signal_btn.svg"/>: <img src="../src/img/lost_signal_btn.svg"/>}
                        </div>
                        <div className="durability">
                            <p>durability:{durability[1]}</p>
                            {parseInt(durability[0],10)<parseInt( durability[1],10)?
                               <img src="../src/img/win-signal_btn.svg"/>: <img src="../src/img/lost_signal_btn.svg"/>}
                        </div>
                        <div className="power" style={{display:"flex"}}>
                           <p>power:{power[1]}</p>
                           {parseInt(power[0],10)<parseInt( power[1],10)?
                               <img src="../src/img/win-signal_btn.svg"/>: <img src="../src/img/lost_signal_btn.svg"/>}
                       
                        </div>
                         <div className="combat" style={{display:"flex"}}>
                           <p>combat:{combat[1]}</p>
                           {parseInt(combat[0],10)<parseInt( combat[1],10)?
                               <img src="../src/img/win-signal_btn.svg"/>: <img src="../src/img/lost_signal_btn.svg"/>}
                         </div>
                         
                     </div>
                     </React.Fragment>
                     
                        
                    </div>
                </div>
                <Compare_result_number
                intelligence={intelligence}
                speed={speed}
                durability={durability}
                power={power}
                combat={combat}
                strength={strength}
                isloading={isloading}
                name={name}
                />
                <Compare_result_announcement/> 
             </div>
}
         </section>
     )
}

export default Result;