import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { display_superheroname_action } from '../../action/display_superheroname_action';

const Compare_result_number=(props)=>{
    const [super1intelligencecounter,setsuper1intelligencecounter]=useState(0)
    const [super2intelligencecounter,setsuper2intelligencecounter]=useState(0)
    const [super1strengthcounter,setsuper1strengthcounter]=useState(0)
    const [super2strengthcounter,setsuper2strengthcounter]=useState(0)
    const [super1speedcounter,setsuper1speedcounter]=useState(0)
    const [super2speedcounter,setsuper2speedcounter]=useState(0)
    const [super1durabilitycounter,setsuper1durabilitycounter]=useState(0)
    const [super2durabilitycounter,setsuper2durabilitycounter]=useState(0)
    const [super1powercounter,setsuper1powercounter]=useState(0)
    const [super2powercounter,setsuper2powercounter]=useState(0)
    const [super1combatcounter,setsuper1combatcounter]=useState(0)
    const [super2combatcounter,setsuper2combatcounter]=useState(0)
    const [super1counter,setsuper1counter]=useState(0)
    const [super2counter,setsuper2counter]=useState(0)
   console.log(props.intelligence[0])
   const intelligence=()=>{
    if( parseInt(props.intelligence[0],10)> parseInt(props.intelligence[1],10)) {
        console.log("first won")
        setsuper1intelligencecounter(super1intelligencecounter+1)
        setsuper1counter(super1counter+1)
    }else if(parseInt(props.intelligence[0],10)< parseInt(props.intelligence[1],10)){
        setsuper2intelligencecounter(super2intelligencecounter+1)
        console.log("second won")
        setsuper2counter(super2counter+1)
    }else if(parseInt(props.intelligence[0],10)===parseInt(props.intelligence[1],10)){
        console.log("equal")
    }else{
        console.log("denied")
    }
   }
   const strength=()=>{
    if( parseInt(props.strength[0],10)> parseInt(props.strength[1],10)) {
        console.log("first won")
        setsuper1strengthcounter(super1strengthcounter+1)
        setsuper1counter(super1counter+1)
    }else if(parseInt(props.strength[0],10)< parseInt(props.strength[1],10)){
        setsuper2strengthcounter(super2strengthcounter+1)
        setsuper2counter(super2counter+1)
        console.log("second won")
    }else if(parseInt(props.strength[0],10)===parseInt(props.strength[1],10)){
        console.log("equal")
    }else{
        console.log("denied")
    }
   }
   const speed=()=>{
    if( parseInt(props.speed[0],10)> parseInt(props.speed[1],10)) {
        console.log("first won")
        setsuper1speedcounter(super1speedcounter+1)
        setsuper1counter(super1counter+1)
    }else if(parseInt(props.speed[0],10)< parseInt(props.speed[1],10)){
        setsuper2speedcounter(super2speedcounter+1)
        setsuper2counter(super2counter+1)
        console.log("second won")
    }else if(parseInt(props.speed[0],10)===parseInt(props.speed[1],10)){
        console.log("equal")
    }else{
        console.log("denied")
    }
   }
   const durability=()=>{
    if( parseInt(props.durability[0],10)> parseInt(props.durability[1],10)) {
        console.log("first won")
        setsuper1durabilitycounter(super1durabilitycounter+1)
        setsuper1counter(super1counter+1)
    }else if(parseInt(props.durability[0],10)< parseInt(props.durability[1],10)){
        setsuper2durabilitycounter(super2durabilitycounter+1)
        setsuper2counter(super2counter+1)
        console.log("second won")
    }else if(parseInt(props.durability[0],10)===parseInt(props.durability[1],10)){
        console.log("equal")
    }else{
        console.log("denied")
    }
   }
   const power=()=>{
    if( parseInt(props.power[0],10)> parseInt(props.power[1],10)) {
        console.log("first won")
        setsuper1powercounter(super1powercounter+1)
        setsuper1counter(super1counter+1)
    }else if(parseInt(props.power[0],10)< parseInt(props.power[1],10)){
        setsuper2powercounter(super2powercounter+1)
        setsuper2counter(super2counter+1)
        console.log("second won")
    }else if(parseInt(props.power[0],10)===parseInt(props.power[1],10)){
        console.log("equal")
    }else{
        console.log("denied")
    }
   }
   const combat=()=>{
    if( parseInt(props.combat[0],10)> parseInt(props.combat[1],10)) {
        console.log("first won")
        setsuper1combatcounter(super1combatcounter+1)
        setsuper1counter(super1counter+1)
    }else if(parseInt(props.combat[0],10)< parseInt(props.combat[1],10)){
        setsuper2combatcounter(super2combatcounter+1)
        setsuper2counter(super2counter+1)
        console.log("second won")
    }else if(parseInt(props.combat[0],10)===parseInt(props.combat[1],10)){
        console.log("equal")
    }else{
        console.log("denied")
    }
   }
   const reset=()=>{
       if(props.isloading){
           setsuper1powercounter(0)
           setsuper1strengthcounter(0)
           setsuper1combatcounter(0)
           setsuper1speedcounter(0)
           setsuper1intelligencecounter(0)
           setsuper1durabilitycounter(0)
           setsuper2powercounter(0)
           setsuper2strengthcounter(0)
           setsuper2combatcounter(0)
           setsuper2speedcounter(0)
           setsuper2intelligencecounter(0)
           setsuper2durabilitycounter(0)
           console.log(true)
       }
   }
  
    useEffect(()=>{
  
    intelligence()
    strength()
    speed()
    durability()
    power()
    combat()
    reset()
    },[props.intelligence,props.isloading])
     console.log(super1intelligencecounter,super1strengthcounter)
     const super1=super1intelligencecounter+super1strengthcounter+super1speedcounter+super1durabilitycounter+super1powercounter+super1combatcounter
     const super2=super2intelligencecounter+super2strengthcounter+super2speedcounter+super2durabilitycounter+super2powercounter+super2combatcounter
     const dispatch=useDispatch()
     const winnername=()=>{
       if(super1>super2){
           dispatch(display_superheroname_action(props.name[0]))
           console.log(props.name[0])
       }else if(super1<super2){
        dispatch(display_superheroname_action(props.name[1]))
           console.log(props.name[1]) 
       }else if(props.name[0]===props.name[1]){
        dispatch(display_superheroname_action("match ties"))
           console.log("match ties")
       }else{
           console.log("denied")
       }
    }
    winnername()
     return(
        <div className="compare_result_number">
        <table>
            <tbody>
                <tr>
                    <td>{super1}</td>
                    <td>
                        {super2}
                    </td>
                </tr>
            </tbody>
        </table>
   </div>
     )
}
export default Compare_result_number;