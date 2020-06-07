
const initialstate={
    items:[]
}

const fetch_home_data_reducer=(state=initialstate,action)=>{
               switch(action.type){
                   case "Get":
                       return{
                           ...state,
                           items:action.payload
                       }
                    case "marvel_get":
                        return{
                            ...state,
                            items:action.payload
                        } 
                    case "dc_get":
                        return{
                            ...state,
                            items:action.payload
                        }      
                   default:
                       return state    
               }
}

export default fetch_home_data_reducer;
