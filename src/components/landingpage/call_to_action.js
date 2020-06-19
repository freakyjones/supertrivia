import React from 'react';
import {Link} from 'react-router-dom'
const Call_btn=()=>{
    return(
        <section id="call_to_action">
             <div className="container">
                 <Link to="/home">
                 <button type="button">explore now</button>
                 </Link>
               
             </div>
        </section>
    )
}

export default Call_btn;