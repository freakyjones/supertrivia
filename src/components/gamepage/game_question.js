import React,{useState, useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { display_game_heading_action } from '../../action/display_game_heading_action';
import { display_game_answer_action } from '../../action/display_game_answer_action';
import { game_result_display_action } from '../../action/game_result_display_action';

const Game_question=()=>{
    const [answer,setanswer]=useState("");
    const [counter,setcounter]=useState(0);
    const [rightanswer,setrightanswer]=useState(0)
    // const [wronganswer,setwronganswer]=useState(0)

   const block=useSelector(state=>state.display_game_heading_reducer.display)
   const handlechange=(e)=>{
       const {name,value}=e.target
       setanswer(value)
   }
   const dispatch=useDispatch()
   const handlesubmit=(event)=>{
       event.preventDefault()
       dispatch(display_game_answer_action())
       dispatch(game_result_display_action(counter,rightanswer,true))
       compare()
       setcounter(counter+1)
       reset()
      
   }
     const keys=useSelector(state=>state.fetch_game_superhero_reducer.keys)
     const values=useSelector(state=>state.fetch_game_superhero_reducer.values)
     const name=useSelector(state=>state.fetch_game_superhero_reducer.name)
     const isloading=useSelector(state=>state.fetch_game_superhero_reducer.isloading)
     console.log(keys[0],values[0],name,isloading)


     useEffect(()=>{
        compare()
        reset()
     },[isloading])
     const compare=()=>{
          if(answer==values[counter]){
               setrightanswer(rightanswer+1)
               console.log("hello")
          }else{
               return ;
          }
     }
     
     const reset=()=>{
         if(isloading===true){
             setcounter(0)
             setrightanswer(0)
             console.log("hello")
         }
        
     }
     console.log(rightanswer)
     console.log(counter)
    return(
        <section id="game_question" style={{display:`${block}`}}>
           <div className="container">
               { isloading ?
               <div className="question_loading">
                   <div className="wrapper">
                   <div className="point one"></div> 
                    <div className="point two"></div>
                    <div className="point three"></div>
                   </div> 
               </div>
             :
              <div className="main_game_question">
                  {counter===7?<h1 style={{textAlign:"center",padding:"2em"}}>submitted</h1>:
                  <React.Fragment>
                      {counter===6?
                          <div className="main_game_question_heading">
                      </div>:
                  <div className="main_game_question_heading">
                      <p>what is the {keys[counter]} of batman?</p>
                  </div>
}
                  <div className="main_game_answer">
                      {counter===6?
                      <form onSubmit={handlesubmit} style={{padding:"2em"}}>
                      <button>submit</button>
                  </form>:
                       <form onSubmit={handlesubmit}>
                           <input type="text" placeholder="enter your answer" name="answer" onChange={handlechange} />
                           <button>next</button>
                       </form>
} 
                  </div>
                  </React.Fragment>
}
              </div>
}
           </div>
        </section>
    )
}

export default Game_question;