import React from 'react';

const Item=(props)=>{
     return(
         <div className="item">
             <div className="item_img">
                <img src="../src/img/batman 1.png"/>
             </div>
             <div className="item_details">
                 <button >Details</button>   
             </div>
         </div>
     )
}
export default Item;