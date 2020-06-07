import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import { add } from '../../action/useraction';

const Home_hero=(props)=>{
    const dispatch=useDispatch()

    // useEffect(()=>{
    //   dispatch( add())
    //   console.log("hello")
    // },[])
     return(
       <section id="home_hero">
           <div className="container">
             <div className="main_home_hero">
                <div className="main_home_txt flex-item" >
                    <h1>welcome  to the world of superhero for our biggest fans </h1>
                    <p>know all about your superhero,compare with other superheros and u can also play games how you know about your superhero</p>
                </div>
                <div className="main_home_img flex-item">
                    <img src="../src/img/arc_reactor.svg" alt="arc_reactor"/>
                </div>
             </div>
           </div>
       </section>
     )
}

export default Home_hero;