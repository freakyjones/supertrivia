

const initialstate={
    num:0
}


const Userreducer=(state=initialstate,action)=>{
    switch(action.type){
        case "add":
            return {
                ...state,
                num:state.num+action.payload
            }
        case "sub":
            return{
                ...state,
                num:num-action.payload
            } 
        case "mul":
            return{
                ...state,
                num:num*action.payload
            }   
        case "division":
            return{
                ...state,
                num:num/action.payload
            }  
        default :
        return state;          
    }
}

export default Userreducer;