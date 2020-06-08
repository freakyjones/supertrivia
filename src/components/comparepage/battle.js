import React from 'react';

const Battle=(props)=>{
    return(
        <section id="battle">
            <div className="container">
               <div className="main_battle">
                   <form>
                       <div className="hero1">
                          <input type="text" name="hero1" placeholder="enter the name"/>
                       </div>
                       <div className="hero2">
                          <input type="text" name="hero2" placeholder="enter the name"/>
                       </div>
                       <button>compare</button>
                   </form>
                </div>  
            </div>
        </section>
    )
}

export default Battle;