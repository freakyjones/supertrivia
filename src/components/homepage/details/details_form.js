import React from 'react';
import {useSelector} from 'react-redux'


const Form=(props)=>{

    const hero_details=useSelector((state)=>state.hero_details_reducer.itemsdetails)
    const full_name=useSelector(state=>state.hero_details_reducer.full_name)
    const name=useSelector(state=>state.hero_details_reducer.name)
    const image=useSelector(state=>state.hero_details_reducer.image)
    const gender=useSelector(state=>state.hero_details_reducer.gender)
    const race=useSelector(state=>state.hero_details_reducer.race)
    const eyeColor=useSelector(state=>state.hero_details_reducer.eyeColor)
    const hairColor=useSelector(state=>state.hero_details_reducer.hairColor)
    const  weight=useSelector(state=>state.hero_details_reducer.weight)
    const height=useSelector(state=>state.hero_details_reducer.height)
    const base=useSelector(state=>state.hero_details_reducer.base)
    const occupation=useSelector(state=>state.hero_details_reducer.occupation)
    const group_affiliation=useSelector(state=>state.hero_details_reducer.group_affiliation)
    const alter_egos=useSelector(state=>state.hero_details_reducer.alter_egos)
    const place_of_birth=useSelector(state=>state.hero_details_reducer.place_of_birth)
    const aliases=useSelector(state=>state.hero_details_reducer.aliases)
    const   publisher=useSelector(state=>state.hero_details_reducer.publisher)
    const   relatives=useSelector(state=>state.hero_details_reducer.relatives)
    const   first_appearance=useSelector(state=>state.hero_details_reducer.first_appearance)
    const data_loading=useSelector(state=>state.hero_details_reducer.isloading)
    return(
        <section id="form">
           <div className="container">
               <div className="caption">
               <h2>details</h2>
               </div>
             {data_loading?<div className="main_form" style={{"minHeight":"80vh",display:"flex",justifyContent:"center",alignItems:"center"}}><h1>loading</h1></div>: <div className="main_form">
                
                <div className="section1">
                    <table>
                        <tbody>
                        <tr>
                          <td>Name:-{name}</td>
                        </tr>
                        <tr>
                          <td>Full-Name:-{full_name}</td>
                        </tr>
                        </tbody>
                      
                    </table>
                    <table>
                        <tbody>
                        <tr>
                          <td>relatives:-{relatives}</td>
                        </tr>
                        </tbody>
                    
           
                    </table>
                </div>
                <div className="section2">
                     <div className="details_image">
                          <img src={image}/>
                     </div>
                   
                </div>
                <div className="section3">
                    <div className="details_section3 ">
                    <table>
                        <tbody>
                        <tr>
                          <td>Alter-Egos:-{alter_egos}</td>
                         </tr>
                        </tbody>
              
                    </table>
                    <table>
                       <tbody>
                       <tr>
                             <th rowSpan="2" style={{color:"white"}}>Aliases:-</th>
                              <td>{aliases[0]}</td>
                         </tr>
                         <tr>
                           <td>{aliases[1]}</td>
                         </tr>
                       </tbody>
                    
                     </table>
                    </div>
                     <table>
                         <tbody>
                         <tr>
                             <td>Place-Of-Birth:-{place_of_birth}</td>
                             
                         </tr>
                         <tr>
                             <td>first-appearance:-{first_appearance}</td>
                         </tr>
                         </tbody>
                     </table>
                </div>
                <div className="section4">
                    <table>
                        <tbody>
                        <tr>
                          <td>Gender:-{gender}</td>
                        </tr>
                        <tr>
                           <td>Height:-{height}</td>
                        </tr>
                        <tr>
                           <td>Eye-Color:-{eyeColor}</td>
                        </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                        <tr>
                          <td>Race:-{race}</td>
                        </tr>
                        <tr>
                          <td>Weight:-{weight}</td>
                        </tr>
                        <tr>
                          <td>Hair-Color:-{hairColor}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="section5">
                    <table>
                        <tbody>
                        <tr>
                          <td>Occupation:-{occupation}</td>
                        </tr>
                        <tr>
                          <td>Base:-{base}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="section6">
                     <table>
                         <tbody>
                         <tr>
                             <td>Group-Affiliation :-{group_affiliation}</td>
                         </tr>
                         </tbody>
                     </table>
                </div>
             </div>} 
                     
           </div>
        </section>
    )
}

export default Form ;