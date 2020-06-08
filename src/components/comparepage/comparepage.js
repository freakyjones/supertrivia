import React from 'react';
import Header from '../landingpage/header'
import Test from '../homepage/test';
import Compare_heading from './compare_heading';
import Battle from './battle';
import Result from './result';
const Compare=(props)=>{
     return(
         <div id="comparepage">
            <Header/>
            <Compare_heading/>
            <Battle/>
            <Result/>
            <Test/>
         </div>
     )
}

export default Compare