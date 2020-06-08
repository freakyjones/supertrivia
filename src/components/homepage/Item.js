import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { hero_details_action } from '../../action/hero_details_action';
const Item=(props)=>{
    const dispatch=useDispatch()
   const  handledetails=()=>{
      dispatch(hero_details_action(props.id))
    }
     return(
         <div className="item">
             <div className="item_img">
                <img src={props.image}/>
             </div>
             <div className="item_details" onClick={handledetails}>
                 <Link  to="/details">
                 <button >Details</button>   
                 </Link>
            </div>
         </div>
     )
}
export default Item;