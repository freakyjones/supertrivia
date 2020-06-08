

export const hero_details_action=(id)=>{
    return (dispatch)=>{
        dispatch({
            type:"detailes_request",
            payload:true
        })
       fetch(`https://www.superheroapi.com/api.php/1233073363709350/${id}`)
       .then(res=>{
           return res.json()
       })
       .then(data=>{
           console.log(data)
            console.log(data.biography['full-name'])
           dispatch({
               type:"get_details",
               payload:data,
               full_name:data.biography['full-name'],
               name:data.name,
               image:data.image.url,
               gender:data.appearance.gender,
               race:data.appearance.race,
               eyeColor:data.appearance['eye-color'],
               hairColor:data.appearance['hair-color'],
               height:data.appearance.height[1],
               weight:data.appearance.weight[1],
               base:data.work.base ,
               occupation:data.work.occupation,
               group_affiliation:data.connections['group-affiliation'],
               alter_egos:data.biography['alter-egos'],
               place_of_birth:data.biography['place-of-birth'],
               aliases:data.biography.aliases,
               publisher:data.biography.publisher,
               relatives:data.connections.relatives,
               first_appearance:data.biography['first-appearance'],
               isloading:false
           })
       })
    }
}
