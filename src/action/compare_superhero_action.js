



export   const compare_superhero_action=(hero1,hero2)=>{
         return (dispatch)=>{
             dispatch({
                 type:"request_send",
                 payload:true
             })
             Promise.all([fetch(`https://www.superheroapi.com/api.php/1233073363709350/search/${hero1}`),
             fetch(`https://www.superheroapi.com/api.php/1233073363709350/search/${hero2}`)])
             .then(responses=>{
             return Promise.all(responses.map(r=>r.json()))
            })
             .then(supers =>{
                 console.log(supers)
                 const [user1,user2]=supers
                 console.log(user1,user2)
                
                   dispatch({
                       type:"get_data",
                       intelligence:[user1.results[0].powerstats.intelligence,user2.results[0].powerstats.intelligence],
                       strength:[user1.results[0].powerstats.strength,user2.results[0].powerstats.strength],
                       speed:[user1.results[0].powerstats.speed,user2.results[0].powerstats.speed],
                       durability:[user1.results[0].powerstats.durability,user2.results[0].powerstats.durability],
                       power:[user1.results[0].powerstats.power,user2.results[0].powerstats.power],
                       combat:[user1.results[0].powerstats.combat,user2.results[0].powerstats.combat],
                       image:[user1.results[0].image.url,user2.results[0].image.url],
                       name:[user1.results[0].name,user2.results[0].name]
                   })
             })
             .catch(err=>{
               console.log(err)
             })   
             
         }
}