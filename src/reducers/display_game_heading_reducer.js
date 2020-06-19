const initstate={
     display:"none"
}
const display_game_heading_reducer=(state=initstate,action)=>{
        switch(action.type){
            case "block_display":
                return {
                    ...state,
                    display:action.payload
                }
            default:
                return state;    
        }
}

export default display_game_heading_reducer;
