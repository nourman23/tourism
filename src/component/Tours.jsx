
import React ,{useContext} from 'react';
import { Link } from "react-router-dom";
import Tour from './Tour';
import { AppContext } from '../context';
  
function Tours (){
	const { cities } = useContext(AppContext);

    // console.log(cities);
    return (
        <>
        
        <h3 className='m-5'> Tourism In Jordan</h3>
        <div className=" d-flex flex-wrap text-center justify-content-center Tour" >
           
  {cities.map((city,i) => (
   
         
   <Link 
   to={"/Tour-details/"+city.id} 
//    state={{city }}
   key={i}>
<Tour city={city}/>    
    </Link>
  )
  
  )}
</div>
</>

    );
 


}
  
export default Tours;