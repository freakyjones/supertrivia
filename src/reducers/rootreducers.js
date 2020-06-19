import { combineReducers } from 'redux'
import Userreducer from './userreducer'
import fetch_home_data_reducer from './fetch_home_data_reducer'
import hero_details_reducer from './hero_details_reducer'
import compare_superhero_reducer from './compare_superhero_reducer'
import compare_section_display_reducer from './compare_section_display_reducer'
import display_superheroname_reducer from './display_superheroname_reducer'
import display_game_heading_reducer from './display_game_heading_reducer'
import display_game_answer_reducer from './display_game_answer_reducer'
import fetch_game_superhero_reducer from './fetch_game_superhero_reducer'
import game_result_display_reducer from './game_result_display_reducer'
const Allreducer=combineReducers({
       Userreducer,
       fetch_home_data_reducer,
       hero_details_reducer,
       compare_section_display_reducer,
       compare_superhero_reducer,
       display_superheroname_reducer,
       display_game_heading_reducer,
       display_game_answer_reducer,
       fetch_game_superhero_reducer,
       game_result_display_reducer
})

export default Allreducer;