


 export  const game_result_display_action=(total,correct,submit)=>{
      return{
          type:"get_result",
          total:total,
          correct:correct,
          submit:submit
      }
}