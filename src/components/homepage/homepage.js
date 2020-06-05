import React from 'react';
import Header from '../landingpage/header';
import Home_hero from './home_hero';
import Home_heading from './heading';
import Home_options from './options';
import Home_Items from './items';
import Test from './test';


const Home=(props)=>{
     return(
         <div className="homepage">
              <Header/>
              <Home_hero/>
              <Home_heading/>
              <Home_options/>
              <Home_Items/> 
              <Test/>
         </div>
     )
}

export default Home;