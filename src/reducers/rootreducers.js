import { combineReducers } from 'redux'
import Userreducer from './userreducer'
import fetch_home_data_reducer from './fetch_home_data_reducer'
import hero_details_reducer from './hero_details_reducer'
const Allreducer=combineReducers({
       Userreducer,
       fetch_home_data_reducer,
       hero_details_reducer
})

export default Allreducer;