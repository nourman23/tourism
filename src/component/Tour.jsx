import React from 'react';
  
function Tour (data){
    const city = data.city;
    return (
    <>
    <div className='m-4 Tcard  ' style={{ width:"25rem" }} >
        <div style={{ width:"25rem " , height:"250px" }} >
            <img src={city.image} style={{ width:"100%" , height:"100%" }} alt="" width="300px"/>
            </div>  
            <p className="Tname p-3" >{city.name}</p>
    </div>
    </>
    );
}
  
export default Tour;