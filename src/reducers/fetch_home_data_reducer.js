
const initialstate={
    items:[],
    isloading:false
}

const fetch_home_data_reducer=(state=initialstate,action)=>{
               switch(action.type){
                   case "request_send":
                       return {
                           ...state,
                           isloading:action.payload
                       }
                   case "Get":
                       return{
                           ...state,
                           items:action.payload,
                           isloading:false
                       }
                    case "marvel_get":
                        return{
                            ...state,
                            items:action.payload,
                            isloading:false
                        } 
                    case "dc_get":
                        return{
                            ...state,
                            items:action.payload,
                            isloading:false
                        }      
                   default:
                       return state    
               }
}

export default fetch_home_data_reducer;
