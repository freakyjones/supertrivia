import React from 'react';
import Item from './Item';
const Home_Items=(props)=>{
    return(
        <section id="home_items">
         <div className="container">
            <div className="home_main_items">
               <Item/>
            </div>
         </div>
        </section>
       
    )
}

export default Home_Items;