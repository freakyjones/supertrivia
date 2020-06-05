import React from 'react';
import Header from './header';
import Hero from './hero';
import Call_btn from './call_to_action';


const Landing=(props)=>{
    return(
      <div className="landing_page">
        <Header/>
        <Hero/>
        <Call_btn/>
      </div>
    )
}

export default Landing;