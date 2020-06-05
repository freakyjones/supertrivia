import React,{useState} from 'react';
import { Link} from 'react-router-dom'
const Header=(props)=>{
    
    const [display,setdisplay]=useState("none")
   const  handleclick=()=>{
        if(display==="none"){
            setdisplay("block")
        }else{
            setdisplay("none")
        }
        console.log("hello")
    }
    return(
        <header>
            <div className="container">
                <div className="nav">
                   <div className="logos row">
                        <div className="logo">
                        <img src="../src/img/logo.svg"/>
                        </div>
                        <div className="sandwitch_btn" >
                            {display==="none"?<img src="../src/img/toggle_btn.svg" onClick={handleclick}/>:
                            <img src="../src/img/cut.svg" onClick={handleclick}/>
                            }
                       
                        </div>
                        <div className="nav_links">
                        <ul>
                        <Link to="/home"style={{textDecoration:"none",color: "none"}}>
                            <li style={{textDecoration:"none"}}>home</li>
                            </Link>
                            <Link to="/compare" style={{textDecoration:"none",color: "none"}}>
                            <li>compare</li>
                            </Link>
                            <Link to="/game" style={{textDecoration:"none",color: "none"}}>
                            <li>game</li>
                            </Link>
                        </ul>
                        </div>
                   </div>
                   <div className="nav_links mobile" style={{   display:`${display}`}}>
                        <ul>
                        <Link to="/home"style={{textDecoration:"none",color: "none"}}>
                            <li style={{textDecoration:"none"}}>home</li>
                            </Link>
                            <Link to="/compare" style={{textDecoration:"none",color: "none"}}>
                            <li>compare</li>
                            </Link>
                            <Link to="/game" style={{textDecoration:"none",color: "none"}}>
                            <li>game</li>
                            </Link>
                           
                        </ul>
                   </div>
                </div>
            </div>
        </header>
    )
}

export default Header;