const initstate={
    total:0,
    correct:0,
    submit:false
}

const game_result_display_reducer=(state=initstate,action)=>{
        switch(action.type){
            case "get_result":
                return {
                    ...state,
                    total:action.total,
                    correct:action.correct,
                    submit:action.submit
                }
            default:
                return state;    
        }
}

export default game_result_display_reducer;