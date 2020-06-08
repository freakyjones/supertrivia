
const initalstate={
    itemsdetails:{},
    full_name:"",
    name:"",
    image:"",
    gender:"",
    race:"",
    eyeColor:"",
    hairColor:"",
    height:"",
    weight:"",
    base:"",
    occupation:"",
    group_affiliation:"",
    alter_egos:"",
    place_of_birth:"",
    aliases:[],
    publisher:"",
    relatives:"",
    first_appearance:"",
    isloading:false
}
 const hero_details_reducer=(state=initalstate,action)=>{
          switch(action.type){
              case "get_details":
                  return{
                      ...state,
                      itemsdetails:action.payload,
                      full_name:action.full_name,
                      name:action.name,
                      image:action.image,
                      gender:action.gender,
                      race:action.race,
                      eyeColor:action.eyeColor,
                      hairColor:action.hairColor,
                      height:action.height,
                      weight:action.weight,
                      base:action.base,
                      occupation:action.occupation,
                      group_affiliation:action.group_affiliation,
                      alter_egos:action.alter_egos,
                      place_of_birth:action.place_of_birth,
                      aliases:action.aliases,
                      publisher:action.publisher,
                      relatives:action.relatives,
                      first_appearance:action.first_appearance,
                      isloading:action.isloading
                    }
               case "detailes_request":
                   return {
                       ...state,
                       isloading:action.payload
                   }     
              default:
                  return state;       
          }
}

export default hero_details_reducer;