import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux'
import { compare_superhero_action } from '../../action/compare_superhero_action'
import { compare_display_action } from '../../action/compare_section_display_action';
const Battle=(props)=>{
    const [names,setnames]=useState({
       hero1:"",
       hero2:""
    });
    const dispatch=useDispatch()
  const  handlechange=(e)=>{
     let name=e.target.name;
     let value=e.target.value;
     setnames({...names,[name]:value})

  }
  const handlesubmitt=(event)=>{
    event.preventDefault();
    const hero1_name=names.hero1;
    const hero1_names=hero1_name.split(" ")
    console.log(hero1_names)
    const hero1=hero1_names.map(ele=>{
        const capitalizeFirstLetter=(string)=> {
            return string.charAt(0).toUpperCase() + string.slice(1);
          }
         return capitalizeFirstLetter(ele); 
       })
       const super_hero1=hero1.join(" ")
       const hero2_name=names.hero2;
       const hero2_names=hero2_name.split(" ")
       console.log(hero2_names)
       const hero2=hero2_names.map(ele=>{
           const capitalizeFirstLetter=(string)=> {
               return string.charAt(0).toUpperCase() + string.slice(1);
             }
            return capitalizeFirstLetter(ele); 
          })
          const super_hero2=hero2.join(" ")
          console.log(super_hero2)

          dispatch(compare_display_action())
          dispatch(compare_superhero_action(super_hero1,super_hero2))
      
    }
 
 
    return(
        <section id="battle">
            <div className="container">
               <div className="main_battle">
                   <form onSubmit={handlesubmitt}>
                       <div className="hero1">
                          <input type="text" name="hero1" placeholder="enter the name"  onChange={handlechange}/>
                       </div>
                       <p>vs</p>
                       <div className="hero2">
                          <input type="text" name="hero2" placeholder="enter the name" onChange={handlechange}/>
                       </div>
                       <button>compare</button>
                   </form>
                </div>  
            </div>
        </section>
    )
}

export default Battle;