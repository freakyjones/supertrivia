const initstate={
    display:"none"
}


const display_game_answer_reducer=(state=initstate,action)=>{
         switch(action.type){
             case "display_answer":
                 return{
                     ...state,
                     display:action.payload
                 }
             default:
                 return state    
         }
}

export default display_game_answer_reducer;