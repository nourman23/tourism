
import {React} from 'react';
import { Link } from "react-router-dom";
import Tour from './Tour';
  
function Tours (data){
    
const cities =data.data;

    return (
        <>
        
        <h3 className='m-5'> Tourism In Jordan</h3>
        <div className=" d-flex flex-wrap text-center justify-content-center Tour" >
           
  {cities.map((city,i) => (
   
         
   <Link to={"/Tour-details/"+city.id} state={{ data: city }} key={i}>

<Tour city={city}/>
      {/* <div className='m-4 Tcard  ' style={{ width:"25rem" }} >
      <div style={{ width:"25rem " , height:"250px" }} ><img src={city.image} style={{ width:"100%" , height:"100%" }} alt="" width="300px"/></div>  
    <p className="Tname p-3" 
     >
      {city.name}
    </p>
    </div> */}
    
    </Link>
  )
  
  )}
</div>
</>

    );
 


}
  
export default Tours;