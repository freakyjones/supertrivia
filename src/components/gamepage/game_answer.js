import React,{useState} from 'react';
import Game_question from './game_question';
import {useSelector} from 'react-redux'


const Game_result=()=>{
    const correct=useSelector(state=>state.game_result_display_reducer.correct)
    const total=useSelector(state=>state.game_result_display_reducer.total)
    const submit=useSelector(state=>state.game_result_display_reducer.submit)
    let block=useSelector(state=>state.display_game_answer_reducer.display)
    const isloading=useSelector(state=>state.fetch_game_superhero_reducer.isloading)
    const incorrect=total-correct;
   //  if((isloading===false && total==0) || isloading===true){
   //     block="none"
   //  }
    return(
       <React.Fragment>
       {total===6 ?
        <section id="game_result" style={{display:`${block}`}}>
          <div className="container">
             <div className="main_game_result">
                <div className="game_result_heading">
                     <h1>result</h1>
                </div>
                <div className="game_result_body">
                    <div className="correct num">
                       <h2>correct</h2>
       <p>{correct}</p>
                    </div>
                    <div className="incorrect num">
                       <h2>incorrect</h2>
       <p>{incorrect}</p>
                    </div>
                </div>
             </div>
          </div>
        </section>
        :<section></section>
       }
       </React.Fragment>
    )
}
export default Game_result;