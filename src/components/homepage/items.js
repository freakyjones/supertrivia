import React,{useEffect,useState} from 'react';
import Item from './Item';
import {useDispatch,useSelector} from 'react-redux'
import { fetch_home_data_action } from '../../action/fetch_home_data_action';
const Home_Items=(props)=>{
  
  const [isloading,setisloading]=useState(false)
    const  image=useSelector((state)=> state.fetch_home_data_reducer.items)
    
  
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
      setisloading(true)
      dispatch(fetch_home_data_action())
      setisloading(false)
    },[])

   
   
    
      
    return(
        <section id="home_items">
         <div className="container">
         {isloading===true?<div className="home_main_items"><h1>loading</h1></div>:<div className="home_main_items" style={{transition:"all 1s ease-in-out"}}>
            
            {mapdata}
          </div>}
            
         </div>
        </section>
       
    )
}

export default Home_Items;