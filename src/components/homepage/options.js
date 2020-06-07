import React from 'react';
import {useDispatch} from 'react-redux'
import { fetch_home_marvel_data_action,fetch_home_dc_data_action } from '../../action/fetch_home_data_action';
const Home_options=(props)=>{

   const dispatch=useDispatch();
   const handleclick=()=>{
     console.log("hello")
     dispatch(fetch_home_marvel_data_action())
   }
   const handledcclick=()=>{
      console.log("hello");
      dispatch(fetch_home_dc_data_action())
   }
   return(
       <section id="home_options">
           <div className="container">
              <div className="main_options">
                 <div className="marvel" onClick={handleclick} style={{cursor:"pointer"}}>
                    <h2>MARVEL</h2>
                 </div>
                 <div className="dc" style={{cursor:"pointer"}} onClick={handledcclick}>
                     <h2>DC</h2>
                 </div>
              </div>
           </div>
       </section>
   )
}

export default Home_options;