import React from "react";
import Image from 'next/image'
// import coffeeStoresData from "../data/coffee-stores.json";


function CoffeeInfo(props) {
  
  return (
    <>
       <div className="iconWrapper flex mb-4">
         <Image src="/static/icons/places.svg" width="24" height="24" alt="icon"/>
         <p className="pl-2 text-2xl m-0 font-bold">{props.address}</p>
       </div>
       <div className="iconWrapper  flex mb-4">
            <Image src="/static/icons/nearMe.svg" width="24" height="24" alt="icon"/>
            <p className="pl-2 text-2xl m-0 font-bold">{props.neighbourhood}</p>
          </div>
          <div className="iconWrapper  flex mb-4">
            <Image src="/static/icons/star.svg" width="24" height="24" alt="icon"/>
            <p className="pl-2 text-2xl m-0 font-bold">1</p>
          </div>
      
    
    
    
    </>
  );
}

export default CoffeeInfo;
