import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
// import { compare_display_action } from '../../action/compare_section_display_action';
import { display_game_heading_action } from '../../action/display_game_heading_action';
import { fetch_game_superhero_action } from '../../action/fetch_game_superhero_action';


const Game_main=()=>{
    const [name,setname]=useState("")
    const dispatch=useDispatch()
   const handlechange=(e)=>{
        const {name,value}=e.target
        setname(value)
    }
  const handlesubmit=(event)=>{
      event.preventDefault()
      const hero_name=name.split(" ")
      console.log(hero_name)
      const hero=hero_name.map(ele=>{
          const capitalizeFirstLetter=(string)=> {
              return string.charAt(0).toUpperCase() + string.slice(1);
            }
           return capitalizeFirstLetter(ele); 
         })
         const super_hero=hero.join(" ")
         console.log(super_hero)
         dispatch(fetch_game_superhero_action(super_hero))
        dispatch(display_game_heading_action())   

    }
    return(
        <section id="game_main">
           <div className="container">
              <div className="main_game_main">
                  <div className="game_heading">
                      <h1>he superfan are you ready to give a test about your fevariout superhero ! </h1>
                  </div>
                  <div className="game_poster">
                       <p>write your favarioute superhero name</p>  
                  </div>
                  <div className="game_input">
                      <form onSubmit={handlesubmit}>
                      <input type="text" placeholder="enter the name" name="name" onChange={handlechange} />
                      <button>start</button>
                      </form>
                  </div>
              </div>
           </div>
        </section>
    )
}

export default Game_main;