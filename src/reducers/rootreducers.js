import { combineReducers } from 'redux'
import Userreducer from './userreducer'
import fetch_home_data_reducer from './fetch_home_data_reducer'
const Allreducer=combineReducers({
       Userreducer,
       fetch_home_data_reducer
})

export default Allreducer;