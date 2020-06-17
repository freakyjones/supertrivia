import { combineReducers } from 'redux'
import Userreducer from './userreducer'
import fetch_home_data_reducer from './fetch_home_data_reducer'
import hero_details_reducer from './hero_details_reducer'
import compare_superhero_reducer from './compare_superhero_reducer'
import compare_section_display_reducer from './compare_section_display_reducer'
import display_superheroname_reducer from './display_superheroname_reducer'
const Allreducer=combineReducers({
       Userreducer,
       fetch_home_data_reducer,
       hero_details_reducer,
       compare_section_display_reducer,
       compare_superhero_reducer,
       display_superheroname_reducer
})

export default Allreducer;