import React from 'react';
import {useSelector} from 'react-redux'

const Compare_result_announcement=(props)=>{
    const name=useSelector(state=> state.display_superheroname_reducer.name)
      return(
          <div className="compare_result_announcement">
             <h1>{name} wins</h1>
          </div>
      )
} 

export default Compare_result_announcement;