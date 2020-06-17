const initstate={
    intelligence:[],
    speed:[],
    durability:[],
    strength:[],
    power:[],
    combat:[],
    loading:false,
    image:[],
    name:[]
}
const compare_superhero_reducer=(state=initstate,action)=>{
            switch(action.type){
                case "request_send":
                    return {
                        ...state,
                        loading:action.payload
                    }
                case "get_data":
                    return{
                        ...state,
                        intelligence:action.intelligence,
                        speed:action.speed,
                        durability:action.durability,
                        strength:action.strength,
                        power:action.power,
                        combat:action.combat,
                        loading:false,
                        image:action.image,
                        name:action.name
                    }  
                default:
                    return state;      
            }
}

export default compare_superhero_reducer;