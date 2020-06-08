import React from 'react';
import Header from '../../landingpage/header';
import Test from '../test';
import Form from './details_form';


const Details=(props)=>{
   return(
       <div id="details">
         <Header/>
         <Form/>
         <Test/>
       </div>
   )
}

export default Details;