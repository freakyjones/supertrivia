


export const fetch_game_superhero_action=(hero)=>{
   return (dispatch)=>{
       dispatch({
           type:"request_send",
           payload:true
       })
       fetch(`https://www.superheroapi.com/api.php/1233073363709350/search/${hero}`)
       .then(res=>{
           return res.json()
       })
       .then(data=>{
           const name=data.results[0].name
           const keys=Object.keys(data.results[0].powerstats)
           const values=Object.values(data.results[0].powerstats)
           dispatch({
               type:"data_received",
               keys:keys,
               values:values,
               name:name
           })
       })
   }
}