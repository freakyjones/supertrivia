const initstate={
    name:""
}

const display_superheroname_reducer=(state=initstate,action)=>{
             switch(action.type){
                 case "get_name":
                     return{
                         ...state,
                         name:action.payload
                     }
                 default:
                    return state    
             }
}

export default display_superheroname_reducer;