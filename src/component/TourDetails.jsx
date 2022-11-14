
import React ,{useContext} from 'react';
import { AppContext } from '../context';

import {useParams } from "react-router-dom"

  
function TourDetails (){
    const {id} =useParams();
	const { cities } = useContext(AppContext);

    const city =cities.find(city => {
        return city.id == id;
    }) ;
    console.log(city);
    return  (
         <>

         
         <div className="container-fluid my-5  w-75"> 
               <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-4 ">
                        {city.name}
                        </h1>
                        <div style={{ width:"600px" }}>
                            <p className="lead m-3" >
                        {city.info}
                        </p></div>
                        </div>
                        <div className="col-md-6 ">
                        <h1 className="display-4 " >
                            <div style={{ width:"600px" , height:"400px" }} className="m-5">
                            <img src={city.image} alt="" width="100%" height="100%" /></div>
                        </h1>
                        </div>
                      
                </div></div>
  
       
    </>);
   
 
}
  
export default TourDetails;