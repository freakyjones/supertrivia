import React from 'react';
import Header from '../../landingpage/header';
import Test from '../test';
import Form from './details_form';
import {useSelector} from 'react-redux'

const Details=(props)=>{
  const data_loading=useSelector(state=>state.hero_details_reducer.isloading)
   return(
       <div id="details">
         {data_loading? 
         <div className="wrapper" style={{width:"100%",height:"100vh"}}>
             <div className="point one" style={{ backgroundColor:"white"}}></div> 
             <div className="point two" style={{backgroundColor:"white"}}></div> 
             <div className="point three" style={{backgroundColor:"white"}}></div> 
         </div>
         :
         <React.Fragment>
         <Header/>
         <Form/>
         <Test/>
         </React.Fragment>
      
}
       </div>
   )
}

export default Details;