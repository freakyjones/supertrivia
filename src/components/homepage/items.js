import React,{useEffect,useState} from 'react';
import Item from './Item';
import {useDispatch,useSelector} from 'react-redux'
import { fetch_home_data_action } from '../../action/fetch_home_data_action';
const Home_Items=(props)=>{
  

    const  image=useSelector((state)=> state.fetch_home_data_reducer.items)
    
    const  isloading=useSelector((state)=> state.fetch_home_data_reducer.isloading)
        const mapdata= image.map(element=>{
          if(element.image!=null)
            return <Item 
               id={element.id}
               image={element.image}
               key={element.id}
            />
            // console.log(element)
        })
      //  image.forEach((element)=>{
      //    console.log(element)
      //  })

  
    const dispatch=useDispatch()
    useEffect(()=>{
    
      dispatch(fetch_home_data_action())
    
    },[])

   
   
    
      
    return(
        <section id="home_items">
         <div className="container">
         {isloading?
         <div className="home_main_items">
           <div className="wrapper">
             <div className="point one"></div>
             <div className="point two"></div>
             <div className="point three"></div>
           </div>
           </div>
         :<div className="home_main_items" style={{transition:"all 1s ease-in-out"}}>
            
            {mapdata}
          </div>}
            
         </div>
        </section>
       
    )
}

export default Home_Items;