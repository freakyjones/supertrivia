const initialstate={
    display:"none"
}

const compare_section_display_reducer=(state=initialstate,action)=>{
          switch(action.type){
              case "display":
                  return{
                      ...state,
                      display:action.payload
                  }
              default:
                  return state    
          }
}

export default compare_section_display_reducer;