const inistate={
    keys:[],
    values:[],
    name:"",
    isloading:false
}

const fetch_game_superhero_reducer=(state=inistate,action)=>{
            switch(action.type){
                case "request_send":
                  return{
                      ...state,
                      isloading:action.payload
                  }
                case "data_received":
                    return{
                        ...state,
                        isloading:false,
                        keys:action.keys,
                        values:action.values,
                        name:action.name
                    }  
                default :
                return state    
                
            }
}

export default fetch_game_superhero_reducer;