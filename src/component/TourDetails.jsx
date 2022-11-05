
import React from 'react';
import { useLocation } from "react-router-dom"

  
function TourDetails (){
    const location = useLocation();
    const data = location.state.data;
    console.log(location.state, " useLocation Hook");

    return  (
         <>

         
         <div className="container-fluid my-5  w-75">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h1 className="display-4 ">
                        {data.name}
                        </h1>
                        <div style={{ width:"600px" }}>
                            <p className="lead m-3" >
                        {data.info}
                        </p></div>
                        </div>
                        <div className="col-md-6 ">
                        <h1 className="display-4 " >
                            <div style={{ width:"600px" , height:"400px" }} className="m-5">
                            <img src={data.image} alt="" width="100%" height="100%" /></div>
                        </h1>
                        </div>
                      
                </div></div>
  
       
    </>);
   
 
}
  
export default TourDetails;